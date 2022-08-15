import { Fragment } from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <Fragment>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </Fragment>
  );
}
