import { Fragment } from "react";
import SignUpForm from "../../components/core/signu-up-form/sign-up-form.component";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };
  return (
    <Fragment>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm></SignUpForm>
    </Fragment>
  );
}
