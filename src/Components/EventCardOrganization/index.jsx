import * as Styled from "./styles";
import { Button } from "../Button";
import { useAllEvents } from "../../Providers/AllEvents";
import ReactLoading from "react-loading";
import { useState } from "react";
import { EditEvent } from "../../Components/EditEvent"

export const EventCardOrganization = ({ eventId }) => {
  const { allEvents, removeEvent } = useAllEvents();
  const element = allEvents.find(({ id }) => id === Number(eventId));
  const [isLoading, setIsLoading] = useState(false);
  const [modalEdit, setModalEdit] = useState(false)

  const cancelEvent = () => {
    removeEvent(eventId)
    console.log(1)
  }
  
  return (
    <>
    {modalEdit && <EditEvent eventId={eventId} setModal={setModalEdit}/>}
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
            onClick={() => {
              setModalEdit(true)
            }}
          >
            Editar
          </Button>
          <Button
            background="red"
            padding="10px 15px"
            color="white"
            weigth="700"
            onClick={() => cancelEvent()}
          >
            Cancelar evento
          </Button>
        </div>
      </Styled.DescriptionContainer>
    </Styled.Container>
    </>
  );
};
