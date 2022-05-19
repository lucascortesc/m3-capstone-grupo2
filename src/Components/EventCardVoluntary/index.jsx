import * as Styled from "./styles";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useAllEvents } from "../../Providers/AllEvents";
import ModalCancelSubs from "../ModalCancelSubs";
import { useState } from "react";
import ReactLoading from "react-loading";

export const EventCardVoluntary = ({ eventId, alreadyHave = false }) => {
  const { allEvents } = useAllEvents();
  const [modalCancel, setModalCancel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const element = allEvents.find(({ id }) => id === Number(eventId));

  const cancelSub = () => {
    setModalCancel(true);
  };

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <img src={element?.img} alt={element?.name} />
      </Styled.ImageContainer>
      <Styled.DescriptionContainer>
        <h3>
          {element?.name.length >= 40
            ? element?.name.slice(0, 40) + "..."
            : element?.name}
        </h3>
        <span>{element?.category}</span>
        <span>
          Vagas disponíveis{" "}
          <span>
            {element?.voluntarys.length}/{element?.maxVoluntarys}
          </span>
        </span>
        {isLoading ? (
          <div className="loading">
            <ReactLoading type="spin" color="#c3bd2e" height={30} width={30} />
          </div>
        ) : alreadyHave ? (
          <Button
            onClick={() => cancelSub()}
            backgroundColor="red"
            padding="10px 15px"
            color="white"
            weigth="700"
            align="flex-start"
          >
            Cancelar Inscrição
          </Button>
        ) : (
          <Link to={`/events/${element?.id}`}>
            <Button
              backgroundColor="var(--primaryColor50)"
              padding="10px 15px"
              color="white"
              weigth="700"
            >
              Ver mais
            </Button>
          </Link>
        )}
      </Styled.DescriptionContainer>
      {modalCancel && (
        <ModalCancelSubs
          setModalCancel={setModalCancel}
          event={element}
          setIsLoading={setIsLoading}
        />
      )}
    </Styled.Container>
  );
};
