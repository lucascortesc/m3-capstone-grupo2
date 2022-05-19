import * as Styled from "./styles";
import { Button } from "../Button";
import { useAllEvents } from "../../Providers/AllEvents";
import { useState } from "react";
import { EditEvent } from "../../Components/EditEvent";
import { CancelEvent } from "../CancelEvent";

export const EventCardOrganization = ({ eventId }) => {
  const { allEvents } = useAllEvents();
  const element = allEvents.find(({ id }) => id === Number(eventId));
  const [modalEdit, setModalEdit] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);

  return (
    <>
      {modalEdit && <EditEvent eventId={eventId} setModal={setModalEdit} />}
      {modalCancel && (
        <CancelEvent eventId={eventId} setModalCancel={setModalCancel} />
      )}
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
          <span>
            {element?.state === "progress" && element?.category.length >= 40
              ? element?.category.slice(0, 40) + "..."
              : element?.category}
          </span>
          {element?.state === "progress" && (
            <span>
              Vagas disponíveis{" "}
              <span>
                {element?.voluntarys.length}/{element?.maxVoluntarys}
              </span>
            </span>
          )}
          {element?.state === "canceled" ? (
            <p className="canceled">Evento cancelado</p>
          ) : (
            <div className="btn-box">
              <Button
                backgroundColor="var(--color-highlight)"
                padding="10px 15px"
                color="white"
                weigth="700"
                onClick={() => {
                  setModalEdit(true);
                }}
              >
                Editar
              </Button>
              <Button
                backgroundColor="red"
                padding="10px 15px"
                color="white"
                weigth="700"
                onClick={() => setModalCancel(true)}
              >
                Cancelar evento
              </Button>
            </div>
          )}
        </Styled.DescriptionContainer>
      </Styled.Container>
    </>
  );
};
