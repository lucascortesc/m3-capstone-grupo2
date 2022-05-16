import ModalUser from "../../Components/ModalUser";
import { useState } from "react";

export const User = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Alterar Cadastro
      </button>
      {openModal ? (
        <ModalUser setOpenModal={setOpenModal} onClose={() => setOpenModal(false)}></ModalUser>
      ) : null}
    </div>
  );
};
