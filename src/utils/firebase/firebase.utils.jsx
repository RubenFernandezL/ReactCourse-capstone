import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

const auth = getAuth();
const database = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  documentsToAdd
) => {
  const collectionReference = collection(database, collectionKey);
  const batch = writeBatch(database);
  documentsToAdd.forEach((document) => {
    const docRef = doc(collectionReference, document.title.toLowerCase());
    batch.set(docRef, document);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(database, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
  /*  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    return categoryMap;*/
};

const AuthMethod = {
  GOOGLE: 1,
  EMAIL_AND_PASSWORD: 2,
};

const usersCollection = "users";

export const loginWithGoogle = async (event) => {
  const userAuth = await getUserAuth(AuthMethod.GOOGLE);
  if (userAuth) {
    const { user } = userAuth;
    const userRef = getUserRef(user.uid);
    const snapshot = await getUserSnapshot(userRef);
    const { displayName, email } = user;
    if (!snapshot.exists()) {
      await saveUser(userRef, {
        displayName,
        email,
        createdAt: new Date(),
      });
    }
    return user;
  }
};

export const createUser = async (email, password, displayName) => {
  if (email && password && displayName) {
    const userAuth = await getUserAuth(
      AuthMethod.EMAIL_AND_PASSWORD,
      email,
      password
    );
    if (userAuth) {
      const { user } = userAuth;
      const userRef = getUserRef(user.uid);
      const snapshot = await getUserSnapshot(userRef);
      if (!snapshot.exists())
        await saveUser(userRef, {
          displayName,
          email,
          createdAt: new Date(),
        });
      return user;
    }
  } else alert("Nope");
};

const getUserAuth = async (authMethod, email, password) => {
  try {
    switch (authMethod) {
      case AuthMethod.EMAIL_AND_PASSWORD:
        return await createUserWithEmailAndPassword(auth, email, password);
      case AuthMethod.GOOGLE:
        return await signInWithPopup(auth, provider);
      default:
        return null;
    }
  } catch (error) {
    alert(error);
  }
};

const getUserRef = (uid) => {
  return doc(database, usersCollection, uid);
};

const getUserSnapshot = async (userRef) => {
  return await getDoc(userRef);
};

const saveUser = async (docRef, user) => {
  try {
    const { displayName, email, createdAt } = user;
    await setDoc(docRef, {
      displayName,
      email,
      createdAt,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginWithEmailAndPassword = async (email, password) => {
  if (email && password) {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } else alert("Nope");
};

export const userSignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
