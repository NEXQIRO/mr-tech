# MYHOUR – GitHub-এ তোলার আগে সেটআপ

GitHub-এ এই ৫টা ফাইল একই ফোল্ডারে আপলোড করুন:
`index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`
(`firebase-rules.json` শুধু Firebase-এ পেস্ট করার জন্য, GitHub-এ লাগবে না)

Firebase কনফিগ (প্রজেক্ট mrtech-7e537) index.html-এ বসানো আছে।

## ১. Authentication
Firebase → **Build → Authentication → Sign-in method** এ **Email/Password** ও **Google** চালু করুন।
**Settings → Authorized domains** এ আপনার সাইটের ডোমেইন যোগ করুন (যেমন `yourname.github.io`)।

## ২. Rules
**Realtime Database → Rules** এ আগের সব লেখা মুছে `firebase-rules.json`-এর পুরো লেখা পেস্ট করে **Publish** দিন।
আগের portfolio, messages, chats, settings রুলস যেমন ছিল তেমনই আছে, নতুন `users` ও `suppliers` যোগ হয়েছে।

## ৩. অ্যাডমিন
`mijanbabu2015@gmail.com` অ্যাকাউন্ট অ্যাডমিন। এই ইমেইলে **Google দিয়ে** লগইন করলেই মেনুতে "অ্যাডমিন প্যানেল" আসবে।
(ইমেইল-পাসওয়ার্ডে সাইন আপ করলে ইমেইল ভেরিফাই না হওয়া পর্যন্ত অ্যাডমিন হবে না। তখন Authentication → Users থেকে UID নিয়ে Database-এ `admins/UID = true` দিন।)

## কে কী দেখে
- ইউজারের ডিউটি, বেতন, খরচ শুধু তার নিজের ডিভাইসে থাকে। অ্যাডমিনও দেখতে পারে না।
- অনলাইনে শুধু নাম, মোবাইল, ইমেইল থাকে। শুধু অ্যাডমিন সবারটা দেখে, অন্য ইউজার শুধু নিজেরটা।
- কোম্পানি/সাপ্লাইয়ের নাম সবার জন্য শেয়ার করা তালিকায় থাকে (শুধু নাম, কে দিয়েছে তা সেভ হয় না)।
