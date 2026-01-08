import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc  } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDDDNdyhAZT0tful4c4eQ2pVOS6DvbAAw4",
    authDomain: "reactfrontenddeleteme-1c564.firebaseapp.com",
    projectId: "reactfrontenddeleteme-1c564",
    storageBucket: "reactfrontenddeleteme-1c564.firebasestorage.app",
    messagingSenderId: "168292826954",
    appId: "1:168292826954:web:83004b561e60acd8f0cbb3"
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

