import { Fragment } from "react";
import SignUpForm from "../../components/core/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

export default function Authentication() {
  return (
    <Fragment>
      <h1>SignIn</h1>
      <SignInForm></SignInForm> <SignUpForm></SignUpForm>
    </Fragment>
  );
}
