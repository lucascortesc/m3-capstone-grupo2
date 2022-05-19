import * as Styled from "./styles";

const PageEventCard = ({ event }) => {
  return (
    <Styled.Container>
      <img src={event?.img} alt="" />
      <div className="divInfos">
        <div className="divName">
          <h3>{event?.name}</h3>
          <span>
            {event?.date}, {event?.location}
          </span>
        </div>

        <div className="divVoluntarys">
          <p>Voluntários</p>
          <span>
            {event?.voluntarys.length}/{event?.maxVoluntarys}
          </span>
        </div>
      </div>
      <div className="contactDiv">
        <p>
          <b>Categoria:</b> <span>{event?.category}</span>
        </p>
        <p>
          <b>Contato:</b> <span>{event?.contact}</span>
        </p>
      </div>
      <div className="divDescription">
        <h3>Descrição:</h3>
        <p>{event?.description}</p>
      </div>
    </Styled.Container>
  );
};

export default PageEventCard;
