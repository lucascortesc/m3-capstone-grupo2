import * as Styled from "./styles";

const ModalCancelSubs = ({ setModalCancel }) => {
  const cancelSubs = () => {
    setModalCancel(false);
  };

  return (
    <Styled.Container>
      <div className="modalContainer">
        <div className="modalHeader">
          <p>Você tentou cancelar inscrição em:</p>
          <p>Nome do Evento</p>
        </div>
        <div className="modalButtons">
          <p>Cancelar?</p>
          <button className="modalConfirm">Sim</button>
          <button className="closeModal" onClick={() => setModalCancel(false)}>
            Não
          </button>
        </div>
      </div>
    </Styled.Container>
  );
};

export default ModalCancelSubs;
