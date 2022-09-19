import { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import FromInput from "../form-input/form-input.components";
import { SignUpContainer } from "./sign-up.styles";
import Button from "../button/button.components";
const defaultFromField = {
  displayName: "",
  email: "",
  password: "",
  confrimPassword: "",
};

const SignUp = () => {
  const [formField, setFromField] = useState(defaultFromField);
  const { displayName, email, password, confrimPassword } = formField;
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFromField({ ...formField, [name]: value });
  };
  const resetFromField = () => {
    setFromField(defaultFromField);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confrimPassword) {
      alert("your password not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFromField();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignUpContainer>
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
    </SignUpContainer>
  );
};
export default SignUp;
