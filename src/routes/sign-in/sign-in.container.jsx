import { Fragment } from "react";
import SignUpForm from "../../components/core/signu-up-form/sign-up-form.component";
import { loginWithGoogle } from "../../utils/firebase/firebase.utils";

export default function SignIn() {
  return (
    <Fragment>
      <h1>SignIn</h1>
      <button onClick={loginWithGoogle}>Sign in with google</button>
      <SignUpForm></SignUpForm>
    </Fragment>
  );
}
