import toast from "react-hot-toast";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useAllEvents } from "../../Providers/AllEvents";
import { useUser } from "../../Providers/User";
import * as Styled from "./styles";

const ModalCancelSubs = ({ setModalCancel, event }) => {
  const { removeUserFromEvent } = useAllEvents();
  const { removeEventFromUser } = useUser();
  const { id } = useParams();

  const cancelSubs = async () => {
    setModalCancel(false);
    const statusEvent = await removeUserFromEvent(id);
    const statusUser = await removeEventFromUser(id);
    console.log(statusUser);
    if (statusUser === "OK" && statusEvent === "OK") {
      toast.success("Inscrição feita com sucesso");
    } else {
      toast.error("Ops! Algo de errado.");
    }
  };

  return (
    <Styled.Container>
      <div className="modalContainer">
        <div className="modalHeader">
          <p>Você tentou cancelar inscrição em:</p>
          <p>{event.name}</p>
        </div>
        <div className="modalButtons">
          <p>Cancelar?</p>
          <button className="modalConfirm" onClick={() => cancelSubs()}>
            Sim
          </button>
          <button className="closeModal" onClick={() => setModalCancel(false)}>
            Não
          </button>
        </div>
      </div>
    </Styled.Container>
  );
};

export default ModalCancelSubs;
