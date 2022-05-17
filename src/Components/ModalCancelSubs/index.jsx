import toast from "react-hot-toast";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAllEvents } from "../../Providers/AllEvents";
import { useUser } from "../../Providers/User";
import * as Styled from "./styles";

const ModalCancelSubs = ({ setModalCancel, event, setIsLoading }) => {
  const { removeUserFromEvent } = useAllEvents();
  const { removeEventFromUser } = useUser();
  const history = useHistory();

  const cancelSubs = async () => {
    setModalCancel(false);
    setIsLoading(true);

    const statusEvent = await removeUserFromEvent(event.id);
    const statusUser = await removeEventFromUser(event.id);

    if (statusUser === "OK" && statusEvent === "OK") {
      toast.success("Inscrição removida com sucesso");
      setIsLoading(false);
    } else {
      toast.error("Sessão expirada");
      setIsLoading(false);

      history.push("/login");
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
