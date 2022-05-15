import { Container, Content } from "./styles";

export const EventsListCard = (event) => {
  const {
    name,
    description,
    id,
    img,
    location,
    maxVoluntarys,
    date,
    state,
    userId,
    category,
    voluntarys,
  } = event.event;
  console.log(event);

  return (
    
      <Content>
        <img src={img} alt={description} />
        <h3>{name}</h3>
        <h4>{category}</h4>
        <h5>{date}</h5>
        <p>Vagas disponíveis {voluntarys.length}/{maxVoluntarys}</p>
        <button>Ver mais</button>
      </Content>
  
  );
};
