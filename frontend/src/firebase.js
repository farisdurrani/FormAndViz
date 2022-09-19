import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { DEFAULT_FIRESTORE_COLLECTION } from "./constants";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMDYHfZZtn8TknhbUrdSQTO2iMrAbssTQ",
  authDomain: "formandviz.firebaseapp.com",
  projectId: "formandviz",
  storageBucket: "formandviz.appspot.com",
  messagingSenderId: "22048869664",
  appId: "1:22048869664:web:2a72259be5f1d2db819b45",
  measurementId: "G-4N1H2K42TF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export const addToResponses = async (data) => {
  try {
    const docRef = await addDoc(
      collection(db, DEFAULT_FIRESTORE_COLLECTION),
      data
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getAllResponses = async () => {
  const querySnapshot = await getDocs(
    collection(db, DEFAULT_FIRESTORE_COLLECTION)
  );
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
};

export const registerWithEmail = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      toast.error(`Error in registering: ${JSON.stringify(error.code)}`);
    });
};

export const signInWithEmail = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      if (error.code == "auth/user-not-found") {
        toast.error(`No user found`);
      } else {
        toast.error(`Error in logging in: ${JSON.stringify(error.code)}`);
      }
    });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      toast.success("Sign out successful");
      return true;
    })
    .catch((error) => {
      toast.error(`Error in signing out: ${JSON.stringify(error.code)}`);
    });
};

export const getCurrentlySignedInUser = () => {
  return auth.currentUser?.email;
};
