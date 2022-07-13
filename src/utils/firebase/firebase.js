import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCj-zRJ1q4NhTj-Z34iFk_k_weTUuJnP3g",
  authDomain: "crown-clothing-db-270da.firebaseapp.com",
  projectId: "crown-clothing-db-270da",
  storageBucket: "crown-clothing-db-270da.appspot.com",
  messagingSenderId: "683969427890",
  appId: "1:683969427890:web:681a1f499b15c3ac1f8cab",
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const UserDocRef = doc(db, "users", userAuth.uid);
  //   console.log(UserDocRef);

  const userSnapShot = await getDoc(UserDocRef);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(UserDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error creating user:", err);
    }
  }
  return UserDocRef;
};
