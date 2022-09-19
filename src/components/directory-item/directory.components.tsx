import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { DireactoryCategoryProps } from "../directory/directory.components.js";
import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory.styles";
type DirectoryItemsProps = {
  category: DireactoryCategoryProps;
};
const DirectoryItems: FC<DirectoryItemsProps> = ({ category }) => {
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);
  const { id, title, imageUrl, route } = category;
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
