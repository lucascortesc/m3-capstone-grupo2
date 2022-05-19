import { Content, DivImg, DivInfos } from "./styles";
import { useHistory } from "react-router-dom";

export const EventsListCard = (event) => {
  const history = useHistory();
  const {
    name,
    description,
    id,
    img,
    maxVoluntarys,
    date,
    category,
    voluntarys,
  } = event.event;

  return (
    <Content onClick={() => history.push(`/events/${id}`)} >
      <DivImg>
        <img src={img} alt={description} />
      </DivImg>
      <DivInfos>
        <div>
          <h3>{name}</h3>
          <span>{category}</span>
          <h5>{date}</h5>
          <p>
            Vagas disponíveis {voluntarys.length}/{maxVoluntarys}
          </p>
        </div>
      </DivInfos>
    </Content>
  );
};
