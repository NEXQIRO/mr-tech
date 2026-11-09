/**
 * MR DEVELOPER — Firebase Configuration & Service Layer
 * Supports Firebase Authentication, Realtime Database, Cloud Storage, and Live Chat.
 * Author: Mijanur Rahman (Web & App Developer)
 */

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyC8hKqviJJzheFlEfL_q6AJnelNFk-6mTE",
  authDomain: "mrtech-7e537.firebaseapp.com",
  databaseURL: "https://mrtech-7e537-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mrtech-7e537",
  storageBucket: "mrtech-7e537.firebasestorage.app",
  messagingSenderId: "103240954590",
  appId: "1:103240954590:web:56fcbcdffef47638a4c84f",
  measurementId: "G-LG8TBFL24N"
};

// Check for runtime config override saved via Admin CMS Settings
function getActiveFirebaseConfig() {
  try {
    const saved = localStorage.getItem('MR_DEVELOPER_FIREBASE_CONFIG');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.apiKey && !parsed.apiKey.includes('YOUR_API_KEY')) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Could not read local Firebase config override:", e);
  }
  return DEFAULT_FIREBASE_CONFIG;
}

const activeConfig = getActiveFirebaseConfig();

// Initialize Firebase SDK
let firebaseApp = null;
let firebaseAuth = null;
let firebaseDb = null;
let firebaseStorage = null;
let isConfigured = false;

try {
  if (typeof firebase !== 'undefined' && activeConfig.apiKey && !activeConfig.apiKey.includes('YOUR_API_KEY')) {
    if (!firebase.apps.length) {
      firebaseApp = firebase.initializeApp(activeConfig);
    } else {
      firebaseApp = firebase.app();
    }
    firebaseAuth = firebase.auth();
    firebaseDb = firebase.database();
    firebaseStorage = firebase.storage ? firebase.storage() : null;
    isConfigured = true;
    console.log("🔥 [MR DEVELOPER] Firebase initialized with project:", activeConfig.projectId);
  } else {
    console.info("ℹ️ [MR DEVELOPER] Running in offline/local storage sync mode. Connect Firebase in Admin Settings anytime.");
  }
} catch (error) {
  console.warn("⚠️ [MR DEVELOPER] Firebase initialization warning:", error.message);
}

// Global exported service
window.MR_FIREBASE = {
  config: activeConfig,
  isConfigured: () => isConfigured,
  getApp: () => firebaseApp,
  getAuth: () => firebaseAuth,
  getDb: () => firebaseDb,
  getStorage: () => firebaseStorage,

  /**
   * Verify Admin Access (checks email and /admins/$uid in Realtime DB)
   */
  async verifyAdminAccess(user) {
    if (!user) return false;
    const PRIMARY_ADMIN_EMAIL = "mstrumaah1999@gmail.com";
    if (user.email && user.email.toLowerCase() === PRIMARY_ADMIN_EMAIL.toLowerCase()) {
      return true;
    }
    const customAdminUid = localStorage.getItem('MR_ADMIN_UID');
    if (customAdminUid && user.uid === customAdminUid) {
      return true;
    }
    if (firebaseDb) {
      try {
        const snapshot = await firebaseDb.ref('admins/' + user.uid).once('value');
        if (snapshot.exists() && snapshot.val() === true) {
          return true;
        }
      } catch (err) {
        console.warn("Admin verification check warning:", err.message);
      }
    }
    return false;
  },

  /**
   * Listen to real-time portfolio updates (Public)
   */
  listenToPortfolio(callback) {
    if (firebaseDb && isConfigured) {
      const ref = firebaseDb.ref('portfolio');
      ref.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          callback(data);
        } else {
          loadFallbackSeed(callback);
        }
      }, (error) => {
        console.warn("Realtime DB read error:", error.message);
        loadFallbackSeed(callback);
      });
      return () => ref.off();
    } else {
      loadFallbackSeed(callback);
      return () => {};
    }
  },

  /**
   * Save complete or partial portfolio data (Admin Only)
   */
  async updatePortfolio(section, data) {
    if (!firebaseDb || !isConfigured) {
      const localKey = section ? 'MR_LOCAL_PORTFOLIO_' + section : 'MR_LOCAL_PORTFOLIO';
      localStorage.setItem(localKey, JSON.stringify(data));
      window.dispatchEvent(new CustomEvent('mr-local-data-updated', { detail: { section, data } }));
      return { success: true, localOnly: true };
    }
    const path = section ? `portfolio/${section}` : 'portfolio';
    await firebaseDb.ref(path).set(data);
    return { success: true, localOnly: false };
  },

  /**
   * Push contact inquiry to /messages (Public)
   */
  async submitContactMessage(messageData) {
    const payload = {
      name: messageData.name.trim(),
      email: messageData.email.trim(),
      subject: (messageData.subject || "General Inquiry").trim(),
      message: messageData.message.trim(),
      createdAt: new Date().toISOString(),
      read: false
    };

    if (firebaseDb && isConfigured) {
      const messagesRef = firebaseDb.ref('messages');
      const newRef = messagesRef.push();
      await newRef.set(payload);
      return { success: true, id: newRef.key };
    } else {
      const localMessages = JSON.parse(localStorage.getItem('MR_LOCAL_MESSAGES') || '[]');
      payload.id = 'msg_' + Date.now();
      localMessages.unshift(payload);
      localStorage.setItem('MR_LOCAL_MESSAGES', JSON.stringify(localMessages));
      window.dispatchEvent(new Event('mr-local-messages-updated'));
      return { success: true, id: payload.id, localOnly: true };
    }
  },

  /**
   * Listen to contact messages (Admin Only)
   */
  listenToMessages(callback) {
    if (firebaseDb && isConfigured) {
      const ref = firebaseDb.ref('messages').orderByChild('createdAt');
      ref.on('value', (snapshot) => {
        const msgs = [];
        snapshot.forEach((child) => {
          msgs.unshift({ id: child.key, ...child.val() });
        });
        callback(msgs);
      }, (error) => {
        console.warn("Messages read error:", error);
        const local = JSON.parse(localStorage.getItem('MR_LOCAL_MESSAGES') || '[]');
        callback(local);
      });
      return () => ref.off();
    } else {
      const updateLocal = () => {
        const local = JSON.parse(localStorage.getItem('MR_LOCAL_MESSAGES') || '[]');
        callback(local);
      };
      updateLocal();
      window.addEventListener('mr-local-messages-updated', updateLocal);
      return () => window.removeEventListener('mr-local-messages-updated', updateLocal);
    }
  },

  /**
   * Mark message read / unread (Admin Only)
   */
  async setMessageStatus(messageId, isRead) {
    if (firebaseDb && isConfigured) {
      await firebaseDb.ref(`messages/${messageId}/read`).set(isRead);
    } else {
      const local = JSON.parse(localStorage.getItem('MR_LOCAL_MESSAGES') || '[]');
      const target = local.find(m => m.id === messageId);
      if (target) target.read = isRead;
      localStorage.setItem('MR_LOCAL_MESSAGES', JSON.stringify(local));
      window.dispatchEvent(new Event('mr-local-messages-updated'));
    }
  },

  /**
   * Delete message (Admin Only)
   */
  async deleteMessage(messageId) {
    if (firebaseDb && isConfigured) {
      await firebaseDb.ref(`messages/${messageId}`).remove();
    } else {
      let local = JSON.parse(localStorage.getItem('MR_LOCAL_MESSAGES') || '[]');
      local = local.filter(m => m.id !== messageId);
      localStorage.setItem('MR_LOCAL_MESSAGES', JSON.stringify(local));
      window.dispatchEvent(new Event('mr-local-messages-updated'));
    }
  },

  /**
   * =========================================================================
   * REAL-TIME BIDIRECTIONAL LIVE CHAT SERVICE
   * Customers chat from Public Site; Mijanur responds from Admin CMS.
   * =========================================================================
   */

  /**
   * Send a chat message (from visitor or admin)
   */
  async sendChatMessage(sessionId, messagePayload, metaPayload = {}) {
    const timestamp = new Date().toISOString();
    const msgData = {
      id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      sender: messagePayload.sender || 'customer',
      senderName: messagePayload.senderName || (messagePayload.sender === 'admin' ? 'Mijanur Rahman' : 'Visitor'),
      text: messagePayload.text.trim(),
      timestamp
    };

    if (firebaseDb && isConfigured) {
      const sessionRef = firebaseDb.ref(`chats/${sessionId}`);
      const newMsgRef = sessionRef.child('messages').push();
      msgData.id = newMsgRef.key;
      await newMsgRef.set(msgData);

      // Update session metadata
      const updates = {
        sessionId,
        lastMessage: msgData.text,
        lastSender: msgData.sender,
        updatedAt: timestamp,
        status: 'active',
        ...metaPayload
      };
      if (msgData.sender === 'customer') {
        updates.unreadForAdmin = true;
      } else {
        updates.unreadForCustomer = true;
      }
      await sessionRef.child('metadata').update(updates);
      return { success: true, message: msgData };
    } else {
      // LocalStorage real-time sync for offline / testing
      const allChats = JSON.parse(localStorage.getItem('MR_LOCAL_CHATS') || '{}');
      if (!allChats[sessionId]) {
        allChats[sessionId] = { metadata: { sessionId, createdAt: timestamp, status: 'active' }, messages: [] };
      }
      allChats[sessionId].messages.push(msgData);
      allChats[sessionId].metadata = {
        ...allChats[sessionId].metadata,
        sessionId,
        lastMessage: msgData.text,
        lastSender: msgData.sender,
        updatedAt: timestamp,
        status: 'active',
        ...metaPayload,
        unreadForAdmin: msgData.sender === 'customer',
        unreadForCustomer: msgData.sender === 'admin'
      };
      localStorage.setItem('MR_LOCAL_CHATS', JSON.stringify(allChats));
      window.dispatchEvent(new CustomEvent('mr-chat-updated', { detail: { sessionId, message: msgData } }));
      return { success: true, message: msgData, localOnly: true };
    }
  },

  /**
   * Listen to a specific chat session's messages (Visitor & Admin active view)
   */
  listenToChatSession(sessionId, callback) {
    if (firebaseDb && isConfigured) {
      const ref = firebaseDb.ref(`chats/${sessionId}/messages`);
      ref.on('value', (snapshot) => {
        const messages = [];
        snapshot.forEach((child) => {
          messages.push({ id: child.key, ...child.val() });
        });
        callback(messages);
      });
      return () => ref.off();
    } else {
      const update = () => {
        const allChats = JSON.parse(localStorage.getItem('MR_LOCAL_CHATS') || '{}');
        const session = allChats[sessionId];
        callback(session ? session.messages || [] : []);
      };
      update();
      const handler = (e) => {
        if (!e.detail || e.detail.sessionId === sessionId) update();
      };
      window.addEventListener('mr-chat-updated', handler);
      window.addEventListener('storage', update);
      return () => {
        window.removeEventListener('mr-chat-updated', handler);
        window.removeEventListener('storage', update);
      };
    }
  },

  /**
   * Listen to all active chat sessions (Admin Live Chat Console)
   */
  listenToAllChats(callback) {
    if (firebaseDb && isConfigured) {
      const ref = firebaseDb.ref('chats');
      ref.on('value', (snapshot) => {
        const chatList = [];
        snapshot.forEach((child) => {
          const val = child.val();
          if (val && val.metadata) {
            chatList.push({
              sessionId: child.key,
              metadata: val.metadata,
              messagesCount: val.messages ? Object.keys(val.messages).length : 0
            });
          }
        });
        chatList.sort((a, b) => new Date(b.metadata.updatedAt || 0) - new Date(a.metadata.updatedAt || 0));
        callback(chatList);
      });
      return () => ref.off();
    } else {
      const update = () => {
        const allChats = JSON.parse(localStorage.getItem('MR_LOCAL_CHATS') || '{}');
        const chatList = Object.keys(allChats).map((sessionId) => ({
          sessionId,
          metadata: allChats[sessionId].metadata || { sessionId },
          messagesCount: (allChats[sessionId].messages || []).length
        }));
        chatList.sort((a, b) => new Date(b.metadata.updatedAt || 0) - new Date(a.metadata.updatedAt || 0));
        callback(chatList);
      };
      update();
      window.addEventListener('mr-chat-updated', update);
      window.addEventListener('storage', update);
      return () => {
        window.removeEventListener('mr-chat-updated', update);
        window.removeEventListener('storage', update);
      };
    }
  },

  /**
   * Mark chat session as read by Admin
   */
  async markChatReadByAdmin(sessionId) {
    if (firebaseDb && isConfigured) {
      await firebaseDb.ref(`chats/${sessionId}/metadata/unreadForAdmin`).set(false);
    } else {
      const allChats = JSON.parse(localStorage.getItem('MR_LOCAL_CHATS') || '{}');
      if (allChats[sessionId] && allChats[sessionId].metadata) {
        allChats[sessionId].metadata.unreadForAdmin = false;
        localStorage.setItem('MR_LOCAL_CHATS', JSON.stringify(allChats));
        window.dispatchEvent(new CustomEvent('mr-chat-updated', { detail: { sessionId } }));
      }
    }
  },

  /**
   * Resolve or delete a chat session (Admin Only)
   */
  async resolveChatSession(sessionId) {
    if (firebaseDb && isConfigured) {
      await firebaseDb.ref(`chats/${sessionId}/metadata/status`).set('resolved');
    } else {
      const allChats = JSON.parse(localStorage.getItem('MR_LOCAL_CHATS') || '{}');
      if (allChats[sessionId] && allChats[sessionId].metadata) {
        allChats[sessionId].metadata.status = 'resolved';
        localStorage.setItem('MR_LOCAL_CHATS', JSON.stringify(allChats));
        window.dispatchEvent(new CustomEvent('mr-chat-updated', { detail: { sessionId } }));
      }
    }
  },

  /**
   * Upload an asset to Firebase Storage (Admin Only)
   */
  async uploadFile(file, path) {
    if (firebaseStorage && isConfigured) {
      const storageRef = firebaseStorage.ref(path);
      const snapshot = await storageRef.put(file);
      const downloadUrl = await snapshot.ref.getDownloadURL();
      return downloadUrl;
    } else {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
  }
};

// Fallback seed loader from database-schema.json
async function loadFallbackSeed(callback) {
  try {
    const res = await fetch('database-schema.json');
    if (res.ok) {
      const seed = await res.json();
      callback(seed);
      return;
    }
  } catch (err) {
    // Expected in file:// protocol
  }

  if (window.INITIAL_SEED_DATA) {
    callback(window.INITIAL_SEED_DATA);
  }
}
