import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc  } from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const getHighscore = async () => {
    const docRef = doc(db, 'Highscore', 'Current');
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      return docSnap.data().score ?? 0;  // return score or 0 if missing
    } else {
      // Document doesn't exist yet — create it with score 0
      await setDoc(docRef, { score: 0 });
      return 0;
    }
  };
  

  const uploadHighscore = async (newScore) => {
    const docRef = doc(db, 'Highscore', 'Current');
    let result = await updateDoc(docRef, {
        score: parseInt(newScore)
    });

    return newScore;
  }


  export { getHighscore, uploadHighscore }

