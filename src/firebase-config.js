import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBgYCJUTKebU5w-gxfdKfhvhIq-nDYLoMM",
  authDomain: "nascotest-a46fa.firebaseapp.com",
  projectId: "nascotest-a46fa",
  storageBucket: "nascotest-a46fa.appspot.com",
  messagingSenderId: "403613287698",
  appId: "1:403613287698:web:48c68d7c16f19caf889fcb",
  measurementId: "G-SJ554J5DN2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
