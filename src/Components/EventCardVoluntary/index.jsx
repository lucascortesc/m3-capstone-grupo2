import * as Styled from "./styles";
import { Button } from "../Button";
import { Link } from "react-router-dom";

export const EventCardVoluntary = ({ element, alreadyHave = false }) => {
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <img src={element?.img} alt={element?.name} />
      </Styled.ImageContainer>
      <Styled.DescriptionContainer>
        <h3>{element?.name}</h3>
        <span>{element?.category}</span>
        <span>
          Vagas disponíveis <span>{element?.voluntarys.length}/{element?.maxVoluntarys}</span>
        </span>
        {alreadyHave ? (
          <Button
            background="red"
            padding="10px 15px"
            color="white"
            weigth="700"
            align="flex-start"
          >
            Remover
          </Button>
        ) : (
          <Link to={`/events/${element?.id}`}>
            <Button
              background="var(--primaryColor50)"
              padding="10px 15px"
              color="white"
              weigth="700"
            >
              Ver mais
            </Button>
          </Link>
        )}
      </Styled.DescriptionContainer>
    </Styled.Container>
  );
};
