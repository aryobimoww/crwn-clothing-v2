import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
import FromInput from "../form-input/form-input.components";
import { SignInContainer, ButtonContainer } from "./sign-in.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.components";

const defaultFromField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const [formField, setFromField] = useState(defaultFromField);
  const { email, password } = formField;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFromField({ ...formField, [name]: value });
  };
  const resetFromField = () => {
    setFromField(defaultFromField);
  };

  const signInWithGoogleUser = async () => {
    dispatch(googleSignInStart());
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
    } catch (error) {
      switch (error) {
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
    <SignInContainer>
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
        <ButtonContainer>
          <Button>Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogleUser}
          >
            Google Sign In
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};
export default SignIn;
