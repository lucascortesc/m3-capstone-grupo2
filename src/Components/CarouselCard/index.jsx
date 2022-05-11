import { useHistory } from "react-router-dom";
import * as Styled from "./styles";

const CarouselCard = ({ element }) => {
  const history = useHistory();
  return (
    <Styled.Container
      id={element.id}
      onClick={(e) => history.push(`/eventos/${e.currentTarget.id}`)}
    >
      <img src={element.img} alt="" />
      <p>{element.name}</p>
    </Styled.Container>
  );
};
export default CarouselCard;
