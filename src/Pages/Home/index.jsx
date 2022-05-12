import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Carousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import * as Styled from "./styles";
import { BsArrowDownCircle, BsArrowRightCircle } from "react-icons/bs";

export const Home = () => {
  const history = useHistory();

  return (
    <Styled.Container>
      <header>coloque o header aqui</header>
      <Styled.ImageDiv>
        <h2>
          Uma ação que parece simples <br></br> para você é a esperança de{" "}
          <br></br> muitos.
        </h2>
        <Styled.BackgroundImage></Styled.BackgroundImage>
        <div>
          <Carousel />
          <div className="deslizePopUp">
            Deslize para ver mais <BsArrowDownCircle color="#C3BD2E" />
          </div>
        </div>
      </Styled.ImageDiv>
      <Styled.InfosDiv>
        <div className="whoAreDiv">
          <h3>Quem somos?</h3>
          <p>
            Este projeto tem como objetivo aprimorar a{" "}
            <span className="highlighted">facilidade</span> dos voluntários de
            se comunicarem com organizações sem fins lucrativos em atividades em
            prol da <span className="highlighted">humanidade</span> e de nosso{" "}
            <span className="highlighted">planeta</span>.
          </p>
          <button
            onClick={() => history.push("/eventos")}
            className="InteresseButton"
          >
            <p>
              Tem interesse? <BsArrowRightCircle color="#C3BD2E" />
            </p>
          </button>
        </div>
        <div className="containerHelp">
          <div className="whyHelpDiv">
            <h3>Por que ajudar?</h3>
            <p>
              A cada <span className="highlighted">5 minutos</span> uma criança
              é diagnosticada com{" "}
              <span className="highlighted">desnutrição</span>!
            </p>
            <p>
              A cada <span className="highlighted">10 minutos</span>, uma
              criança falece por <span className="highlighted">fome</span>!
            </p>
            <p>
              E a cada <span className="highlighted">30 minutos</span>, uma
              criança morre de <span className="highlighted">frio</span> nas
              ruas!
            </p>
            <p>
              Por menor que seja a <span className="highlighted">ajuda</span>,
              ela faz diferença dentro de milhoesde necessitados,{" "}
              <span className="highlighted">
                e precisamos de sua ajuda para fazer a diferença no mundo
              </span>
              !
            </p>
          </div>
        </div>
      </Styled.InfosDiv>
      <Footer />
    </Styled.Container>
  );
};
