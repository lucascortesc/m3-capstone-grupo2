import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./styles";
import api from "../../services/api";

const PageEventCard = () => {
  const { id } = useParams();
  const [event, setEvent] = useState();
  useEffect(() => {
    api.get(`/eventos/${id}`).then((res) => setEvent(res.data));
  }, []);

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
      <div className="divDescription">
        <h3>Descrição:</h3>
        <p>{event?.description}</p>
      </div>
    </Styled.Container>
  );
};

export default PageEventCard;
