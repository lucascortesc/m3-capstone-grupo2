import * as Styled from "./styles";

import { Button } from "../Button";
import { BsArrowRightCircle } from "react-icons/bs";

const ModalUser = ({ closeModal }) => {
  return (
    <Styled.Container>
      <div className="modalContainer">
        <button className="closeModal" onClick={() => closeModal(false)}>
          {" "}
          X{" "}
        </button>
        <div className="title">
          <h1>Alteração de Cadastro</h1>
        </div>
        <div className="body">
          <form>
            <input placeholder="Nome"></input>
            <input placeholder="email"></input>
            <input placeholder="Nova Senha"></input>
            <input placeholder="Confirme a Senha"></input>
            <div className="signupButton">
              <Button
                type="submit"
                padding="10px 20px"
                fontSize="12px"
                background="var(--primaryColor50)"
                color="white"
                gap="10px"
                weigth="800"
              >
                Alterar Cadastro
                <BsArrowRightCircle color="var(--color-highlight)" />
              </Button>
            </div>
          </form>
          <div className="leave">
            <Button
              className="buttonLeave"
              onClick={() => closeModal(false)}
              color="white"
              background="red"
              padding="10px"
            >
              Sair
            </Button>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
};

export default ModalUser;
