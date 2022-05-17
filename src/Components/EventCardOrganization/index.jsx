import * as Styled from "./styles";
import { Button } from "../Button";
import { useAllEvents } from "../../Providers/AllEvents";

export const EventCardOrganization = ({ eventId }) => {
  const { allEvents } = useAllEvents();
  const element = allEvents.find(({ id }) => id === Number(eventId));

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <img src={element?.img} alt={element?.name} />
      </Styled.ImageContainer>
      <Styled.DescriptionContainer>
        <h3>{element?.name}</h3>
        <span>{element?.category}</span>
        <span>
          Vagas disponíveis{" "}
          <span>
            {element?.voluntarys.length}/{element?.maxVoluntarys}
          </span>
        </span>
        <div className="btn-box">
          <Button
            background="var(--color-highlight)"
            padding="10px 15px"
            color="white"
            weigth="700"
          >
            Editar
          </Button>
          <Button
            background="red"
            padding="10px 15px"
            color="white"
            weigth="700"
          >
            Remover
          </Button>
        </div>
      </Styled.DescriptionContainer>
    </Styled.Container>
  );
};
