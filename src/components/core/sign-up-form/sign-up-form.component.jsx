import { useState, useContext } from "react";
import { createUser } from "../../../utils/firebase/firebase.utils";
import ButtonComponent from "../form-components/button/button.component";
import FormInput from "../form-components/input/input.component";
import "./sign-up-form.scss";
import { UserContext } from "../../../contexts/user.context";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const isValidPassword = () => {
    return password === confirmPassword;
  };

  const areFielsValid = () => {
    return (
      password !== "" &&
      password !== null &&
      password !== undefined &&
      email !== "" &&
      email !== null &&
      email !== undefined &&
      displayName !== "" &&
      displayName !== null &&
      displayName !== undefined
    );
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            if (isValidPassword() && areFielsValid()) {
              const user = await createUser(email, password, displayName);
              setCurrentUser(user);
            } else alert("Nope");
            setFormFields(defaultFormFields);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        ></FormInput>
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
        <FormInput
          label="Confirm password"
          type="password"
          minLength={6}
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        ></FormInput>
        <ButtonComponent type="submit">Sign up</ButtonComponent>
      </form>
    </div>
  );
};

export default SignUpForm;
