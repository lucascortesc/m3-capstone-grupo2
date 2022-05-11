import * as Styled from "./styles";
import headerUserLogo from "../../Assets/img/header-user-logo.svg";
import { Button } from "../Button";

export const Header = ({ isLogged = false }) => {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <h1>Titulo</h1>
        {isLogged ? (
          <img src={headerUserLogo} alt="the user image" />
        ) : (
          <Button padding="10px 10px" background="">Login / Registro</Button>
        )}
      </Styled.HeaderContainer>
    </Styled.Container>
  );
};
