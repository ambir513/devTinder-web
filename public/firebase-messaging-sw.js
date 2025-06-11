importScripts(
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAMz6jEJCNTUdHR0gaVlOKLZWZQMgU1Nc0",
  authDomain: "devtinder-b4b07.firebaseapp.com",
  projectId: "devtinder-b4b07",
  storageBucket: "devtinder-b4b07.firebasestorage.app",
  messagingSenderId: "800344577785",
  appId: "1:800344577785:web:14716bd630bedf1af93428",
  measurementId: "G-7PBJ06DR1H",
};

// **Initialize Firebase app here**
firebase.initializeApp(firebaseConfig);

// Now initialize messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message:",
    payload
  );

  const notificationTitle = payload.notification.title || "New Message";
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo.png", // Optional icon path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
