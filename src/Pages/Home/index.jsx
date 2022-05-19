import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Carousel from "../../Components/Carousel";
import Footer from "../../Components/Footer";
import * as Styled from "./styles";
import { BsArrowDownCircle, BsArrowRightCircle } from "react-icons/bs";
import { Header } from "../../Components/Header";

export const Home = () => {
  const history = useHistory();

  return (
    <Styled.Container>
      <Header />
      <Styled.ImageDiv>
        <h2>
          Uma ação que parece simples <br></br> para você é a esperança de{" "}
          <br></br> muitos.
        </h2>
        <Styled.BackgroundImage></Styled.BackgroundImage>
        <div>
          <Carousel />
          <div className="deslizePopUp">
            Deslize para ver mais{" "}
            <BsArrowDownCircle color="var(--color-highlight)" />
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
            onClick={() => history.push("/events")}
            className="InteresseButton"
          >
            <p>
              Tem interesse?{" "}
              <BsArrowRightCircle color="var(--color-highlight)" />
            </p>
          </button>
        </div>
        <div className="containerHelp">
          <div className="whyHelpDiv">
            <h3>Por que ajudar?</h3>
            <p>
              {" "}
              No Brasil, <span>uma a cada quatro pessoas sofreu com a falta de comida </span>
              de maneira moderada ou severa entre 2018 e 2020.{" "}
            </p>
            <p>
              {" "}
              Em comparação com o período anterior, 2014 a 2016, são <span>12,1
              milhões de brasileiros </span> a mais em insegurança alimentar.
            </p>
            <p>
              A quantidade de brasileiros em situação grave dobrou no mesmo
              período, passando de <span>1,9% para 3,5%</span>.
            </p>
            <br></br>
            <Styled.Highlight><span>Empatia</span>, <span>compaixão</span> e <span>solidariedade</span>. </Styled.Highlight>
            <p>
              {" "}
              Seja em <span>defesa de uma causa</span>, de uma instituição ou de pessoas em
              situação de risco, o <span>trabalho voluntário</span> tem um papel ativo na 
              <span> transformação de qualquer sociedade.</span>{" "}
            </p>
            <p>
              Assumir o voluntariado é assumir, sobretudo, um <span>compromisso com
              outro!</span>
            </p>
          </div>
        </div>
      </Styled.InfosDiv>
      <Footer />
    </Styled.Container>
  );
};
