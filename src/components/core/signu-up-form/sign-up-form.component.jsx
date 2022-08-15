import { useState } from "react";
import { createUser } from "../../../utils/firebase/firebase.utils";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const registerUser = async (event) => {
    event.preventDefault();
    if (isValidPassword() && areFielsValid())
      await createUser(email, password, displayName);
    else console.log("Nope");
  };

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
    <div>
      <h1>Sign up with your email and password</h1>
      <form
        onSubmit={async (event) => {
          try {
            await registerUser(event);
            setFormFields(defaultFormFields);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <label>Display name</label>
        <input
          type="text"
          required
          onChange={changeHandler}
          name="displayName"
          value={displayName}
        ></input>
        <label>Email</label>
        <input
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        ></input>
        <label>Password</label>
        <input
          type="password"
          minLength={6}
          required
          onChange={changeHandler}
          name="password"
          value={password}
        ></input>
        <label>Confirm password</label>
        <input
          type="password"
          minLength={6}
          required
          onChange={changeHandler}
          name="confirmPassword"
          value={confirmPassword}
        ></input>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
