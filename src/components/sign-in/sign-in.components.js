import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase";
import FromInput from "../form-input/form-input.components";
import "./sign-in.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.components";
import { UserContext } from "../../context/user.context";

const defaultFromField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formField, setFromField] = useState(defaultFromField);
  const { email, password } = formField;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromField({ ...formField, [name]: value });
  };
  const resetFromField = () => {
    setFromField(defaultFromField);
  };

  const signInWithGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await signInAuthWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("user not found");
          break;
        default:
          console.log(error);
      }
    }
    resetFromField();
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>

      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button>Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogleUser}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
