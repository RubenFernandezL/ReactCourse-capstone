import { useState } from "react";
import ButtonComponent from "../core/form-components/button/button.component";
import FormInput from "../core/form-components/input/input.component";
import {
  loginWithGoogle,
  loginWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const loginWithGooglePopUp = async () => {
    await loginWithGoogle();
    setFormFields(defaultFormFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            await loginWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
          } catch (error) {
            alert(error);
          }
        }}
      >
        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        ></FormInput>
        <FormInput
          label="Password"
          type="password"
          minLength={6}
          required
          onChange={changeHandler}
          name="password"
          value={password}
        ></FormInput>
        <div className="buttons-container">
          <ButtonComponent type="submit">Sign in</ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={loginWithGooglePopUp}
            buttonType="Google"
          >
            Google sign in
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
