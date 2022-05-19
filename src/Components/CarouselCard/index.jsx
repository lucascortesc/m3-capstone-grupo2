import { useHistory } from "react-router-dom";
import * as S from "./styles";

const CarouselCard = ({ element }) => {
  const history = useHistory();
  return (
    <S.Container
      id={element?.id}
      onClick={(e) => history.push(`/events/${e.currentTarget.id}`)}
    >
      <S.DivImg>
        <img src={element?.img} alt="" />
      </S.DivImg>
      <S.DivInfos>
        <h4>{element?.name.length >= 25
              ? element?.name.slice(0, 25) + "..."
              : element?.name}</h4>
        <p>{element?.category}</p>
      </S.DivInfos>
    </S.Container>
  );
};
export default CarouselCard;
