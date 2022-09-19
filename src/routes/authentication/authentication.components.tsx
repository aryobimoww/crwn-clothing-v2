import SignUp from "../../components/sign-up/sign-up.components";
import SignIn from "../../components/sign-in/sign-in.components";
import { AuthenticationContainer } from "./authentication.styles";
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
