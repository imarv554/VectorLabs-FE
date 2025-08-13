import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_VETORLABS_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_VETORLABS_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_VETORLABS_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_VETORLABS_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.NEXT_PUBLIC_VETORLABS_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_VETORLABS_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };
export default app;
