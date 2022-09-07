import SignUpForm from "../../components/core/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./auth.scss";
export default function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm></SignInForm> <SignUpForm></SignUpForm>
    </div>
  );
}
