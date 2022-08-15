import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
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
          required
          onChange={changeHandler}
          name="password"
          value={password}
        ></input>
        <label>Confirm password</label>
        <input
          type="password"
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
