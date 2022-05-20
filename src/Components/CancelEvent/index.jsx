import * as Styled from "./styles";
import { Button } from "../Button";
import toast from "react-hot-toast";
import { useAllEvents } from "../../Providers/AllEvents";
import ReactLoading from "react-loading";
import { useState } from "react";

export const CancelEvent = ({ eventId, setModalCancel }) => {
  const { removeEvent } = useAllEvents();
  const [isLoading, setIsLoading] = useState(false);

  const cancelEvent = async () => {
    setIsLoading(true);
    const status = await removeEvent(eventId);
    if (status === "OK") {
      toast.success("Evento cancelado com sucesso");
    } else {
      toast.error("Sessão expirada");
    }
    setModalCancel(false);
    setIsLoading(false);
  };

  return (
    <Styled.Container>
      <div>
        <p>Tem certeza que deseja cancelar o evento?</p>
        {isLoading ? (
          <div className="loading">
            <ReactLoading type="spin" color="#c3bd2e" height={30} width={30} />
          </div>
        ) : (
          <>
            <Button
              align="center"
              color="white"
              backgroundColor="red"
              padding="5px 20px"
              weigth="700"
              onClick={() => cancelEvent()}
            >
              Sim
            </Button>
            <Button
              align="center"
              backgroundColor="var(--primaryColor50)"
              color="var(--color-highlight)"
              padding="5px 20px"
              weigth="700"
              onClick={() => setModalCancel(false)}
            >
              Não
            </Button>
          </>
        )}
      </div>
    </Styled.Container>
  );
};
