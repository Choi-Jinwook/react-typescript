import { FirebaseOptions, initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

const firebaseConfig: FirebaseOptions = Object.freeze({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

export const app = initializeApp(firebaseConfig);

export const database = getDatabase();

export const listen = (path: string = "", callback: (data: any) => any) => {
  const dbRef = ref(getDatabase(app), path);

  return onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
