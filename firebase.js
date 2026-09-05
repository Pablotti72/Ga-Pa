import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcRB_dec2OunBPevgemcWouCfDP6dNZV4",
  authDomain: "moj-dziennik-podrozy.firebaseapp.com",
  databaseURL: "https://moj-dziennik-podrozy-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moj-dziennik-podrozy",
  storageBucket: "moj-dziennik-podrozy.firebasestorage.app",
  messagingSenderId: "997572019753",
  appId: "1:997572019753:web:0f5aa78a1c24072de3be38"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
