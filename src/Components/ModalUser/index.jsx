import * as Styled from "./styles";

import { Button } from "../Button";
import { BsArrowRightCircle } from "react-icons/bs";

import { useUser } from "../../Providers/User";
import { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { UserContext } from "../../Providers/User";

import { UpdateUserSchema } from "../../Validation";

import Input from "../Input";

const ModalUser = ({ id = "modal", onClose = () => {}, closeModal }) => {
  const { updateUser } = useContext(UserContext);
  const { updateUserToUser } = useUser();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(UpdateUserSchema),
  });

  const onSubmitFunction = (data) => {
    updateUser(data);
    updateUserToUser(data);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <Styled.Container id={id} onClick={handleOutsideClick}>
      <div  className="modalContainer" >
        <div className="title">
          <h1>Alteração de Cadastro</h1>
        </div>
        <div className="body">
          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              label="Nova senha"
              register={register}
              name="password"
              error={formState.errors.password?.message}
              type="password"
            />
            <Input
              label="Confirmar senha"
              register={register}
              name="confirmPassword"
              error={formState.errors.confirmPassword?.message}
              type="password"
            />
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
              onClick={onClose}
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
