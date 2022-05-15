import { Content } from "./styles";
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
    <Content>
      <img src={img} alt={description} />
      <h3>{name}</h3>
      <h4>{category}</h4>
      <h5>{date}</h5>
      <p>
        Vagas disponíveis {voluntarys.length}/{maxVoluntarys}
      </p>
      <button onClick={() => history.push(`/events/${id}`)}>Ver mais</button>
    </Content>
  );
};
