import * as Styled from "./styles";
import { useUser } from "../../Providers/User";
import { useAllEvents } from "../../Providers/AllEvents";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import toast from "react-hot-toast";

const ModalAddSubs = ({ setModalAdd, event, setIsLoading }) => {
  const { addEventToUser } = useUser();
  const { addUserToEvent } = useAllEvents();
  const { id } = useParams();
  const history = useHistory();

  const confirmSubs = async () => {
    setModalAdd(false);
    setIsLoading(true);

    const statusUser = await addEventToUser(id);
    const statusEvent = await addUserToEvent(id);

    if (statusUser === "OK" && statusEvent === "OK") {
      toast.success("Inscrição feita com sucesso");
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
          <p>Você tentou se inscrever em:</p>
          <p>{event.name}</p>
        </div>
        <div className="modalButtons">
          <p>Inscrever-se?</p>
          <button className="modalConfirm" onClick={() => confirmSubs()}>
            Sim
          </button>
          <button className="closeModal" onClick={() => setModalAdd(false)}>
            Cancelar
          </button>
        </div>
      </div>
    </Styled.Container>
  );
};

export default ModalAddSubs;
