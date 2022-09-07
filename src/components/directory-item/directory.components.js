import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory.styles.js";

const DirectoryItems = ({ categories }) => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);
  const { id, title, imageUrl, route } = categories;
  return (
    <DirectoryItemContainer key={id} onClick={navigateHandler}>
      {/* <img /> */}
      <BackgroundImage imageUrl={imageUrl} />
      <Body key={id}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItems;
