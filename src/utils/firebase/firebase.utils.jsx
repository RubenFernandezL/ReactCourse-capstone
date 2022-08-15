import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRjPZLN0krdBPmGAACmLGUQlfWjPA0OLg",
  authDomain: "crown-clouding-db.firebaseapp.com",
  projectId: "crown-clouding-db",
  storageBucket: "crown-clouding-db.appspot.com",
  messagingSenderId: "358392373344",
  appId: "1:358392373344:web:f7d0ea067547361a35e305",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(database, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const createdAt = new Date();
    const { displayName, email } = userAuth;
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  } else return userDocRef;
};
