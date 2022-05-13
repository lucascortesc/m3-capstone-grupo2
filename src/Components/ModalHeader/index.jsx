import toast from "react-hot-toast";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useUser } from "../../Providers/User";
import * as Styled from "./styles";
const ModalHeader = ({ setModalHeader }) => {
  const { logoutUser } = useUser();
  const history = useHistory();
  const closeModal = (e) => {
    if (e.target.id === "close") {
      setModalHeader(false);
    }
  };
  const logoutFunc = () => {
    setTimeout(() => history.push("/login"), 1000);
    logoutUser();
    toast.success("Logout realizado com sucesso.");
  };
  window.addEventListener("scroll", () => {
    setModalHeader(false);
  });
  return (
    <Styled.Container id="close" onClick={(e) => closeModal(e)}>
      <div className="pontinha"></div>
      <div className="modal">
        <button className="teste" onClick={() => history.push("/user")}>
          Perfil
        </button>
        <button onClick={() => logoutFunc()}>Logout</button>
      </div>
    </Styled.Container>
  );
};

export default ModalHeader;
