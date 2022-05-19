import * as Styled from "./styles";
import headerUserLogo from "../../Assets/img/header-user-logo.svg";
import { Button } from "../Button";
import { useUser } from "../../Providers/User/index";
import { useState } from "react";
import ModalHeader from "../ModalHeader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Header = ({ userName = false, leftButton }) => {
  const { user } = useUser();
  const history = useHistory()

  const [modalHeader, setModalHeader] = useState(false);
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <h1>{userName ? userName : "Just Help"}</h1>
        {!!user ? (
          <>
            <img
              onClick={() => setModalHeader(true)}
              src={headerUserLogo}
              alt="the user logo"
            />
            {modalHeader && <ModalHeader setModalHeader={setModalHeader} />}
          </>
        ) : (
          <div>
            
              <Button
                padding="10px 10px"
                backgroundColor ="#146666"
                color="white"
                weigth="800"
                onClick={()=>history.push('/login')}
              >
                Login
              </Button>
            
            
              <Button
                padding="10px 10px"
                backgroundColor="#146666"
                color="white"
                weigth="800"
                onClick={()=>history.push('/register')}
              >
                Cadastro
              </Button>
            
          </div>
        )}
      </Styled.HeaderContainer>
    </Styled.Container>
  );
};
