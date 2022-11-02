import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.style";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;

  const navigate = useNavigate();

  const navigateTo = () => navigate(`shop/category/${id}`)

  return (
    <DirectoryItemContainer key={id} onClick={navigateTo}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
