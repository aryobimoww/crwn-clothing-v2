import SignUp from "../../components/sign-up/sign-up.components";
import SignIn from "../../components/sign-in/sign-in.components";
import "./authentication.styles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
