import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../../Components/Footer";
import PageEventCard from "../../Components/PageEventCard";
import * as Styled from "./styles";

export const Event = () => {
  const isLogged = false;
  const history = useHistory();

  return (
    <Styled.Container>
      <div className="divHeader">
        <div>header vem aqui</div>
      </div>
      <div className="buttonsDiv">
        <button onClick={() => history.goBack()} className="buttonMobile">
          <BsArrowLeft />
        </button>
        <button onClick={() => history.goBack()} className="buttonDesktop">
          Voltar
        </button>
      </div>
      <PageEventCard />
      <div className="subscribeDiv">
        <p>Tem interesse?</p>
        {isLogged ? (
          <button>Inscrever-se no evento</button>
        ) : (
          <button onClick={() => history.push("/login")}>
            Faça o login para se inscrever
          </button>
        )}
      </div>
      <div className="googleMaps">google maps api</div>
      <Footer />
    </Styled.Container>
  );
};
