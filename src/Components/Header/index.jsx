import * as Styled from "./styles";
import headerUserLogo from "../../Assets/img/header-user-logo.svg";
import Logo from "../../Assets/img/Logo.png";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import { useUser } from "../../Providers/User/index";
import { useState } from "react";
import ModalHeader from "../ModalHeader";

export const Header = ({ userName = false }) => {
  const { user } = useUser();
  const [modalHeader, setModalHeader] = useState(false);
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <h1>{userName ? userName : <img className="logo" src={Logo} alt=""/>}</h1>
        {!!user ? (
          <>
            <img
              className="imgUserLogo"
              onClick={() => setModalHeader(true)}
              src={headerUserLogo}
              alt="the user logo"
            />
            {modalHeader && <ModalHeader setModalHeader={setModalHeader} />}
          </>
        ) : (
          <div>
            <Link to="/login">
              <Button
                padding="10px 10px"
                background="#146666"
                color="white"
                weigth="800"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                padding="10px 10px"
                background="#146666"
                color="white"
                weigth="800"
              >
                Cadastro
              </Button>
            </Link>
          </div>
        )}
      </Styled.HeaderContainer>
    </Styled.Container>
  );
};
