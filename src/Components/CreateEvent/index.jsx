import * as Styled from "./styles";
import Input from "../Input";
import { Button } from "../Button";
import { FiArrowRightCircle } from "react-icons/fi";

export const CreateEvent = () => {
  return (
    <Styled.Container>
      <Styled.FormContainer>
        <form>
          <Styled.CloseButton>x</Styled.CloseButton>
          <h1>Criar um evento</h1>
          <input />
          <input />
          <input />
          <input />
          <input />
          <input />
          <Button
            color="white"
            weigth="700"
            fontSize="16px"
            gap="15px"
            align="center"
            padding="7px 35px"
            background="#146666"
          >
            Criar <FiArrowRightCircle size="18px" color="#C3BD2E" />
          </Button>
        </form>
      </Styled.FormContainer>
    </Styled.Container>
  );
};
