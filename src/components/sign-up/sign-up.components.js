import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FromInput from "../form-input/form-input.components";
import "./sign-up.styles.scss";
import Button from "../button/button.components";
import { UserContext } from "../../context/user.context";
const defaultFromField = {
  displayName: "",
  email: "",
  password: "",
  confrimPassword: "",
};

const SignUp = () => {
  const [formField, setFromField] = useState(defaultFromField);
  const { displayName, email, password, confrimPassword } = formField;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromField({ ...formField, [name]: value });
  };
  const resetFromField = () => {
    setFromField(defaultFromField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confrimPassword) {
      alert("your password not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFromField();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2> Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FromInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <FromInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FromInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <FromInput
          label="Confrim Password"
          type="password"
          required
          name="confrimPassword"
          onChange={handleChange}
          value={confrimPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUp;
