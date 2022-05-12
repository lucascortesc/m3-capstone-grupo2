import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useAllEvents } from "../../Providers/AllEvents";
import * as Styled from "./styles";

export const Home = () => {
  const history = useHistory();

  const { addEvent, addUserToEvent, removeUserFromEvent } = useAllEvents();

  const handleClick = () => {
    addEvent({
      name: "Evento de teste addVoluntarios 2",
      description: "Evento que ocorrera para ajudar o teste",
      voluntarys: [],
      maxVoluntary: 5,
      location: "Kenzie teste",
      date: "16 de fevereiro",
      state: "progress",
      img: "https://cdn1.photostockeditor.com/c/1812/human-five-children-smiling-while-doing-peace-hand-sign-people-people-image.jpg",
      userId: 1,
    });
    //addUserToEvent({ nome: "Teste 2", id: 2 }, 12);
    //removeUserFromEvent({ nome: "Lucas", id: 1 }, 12);
  };

  return (
    <Styled.Container>
      <header>coloque o header aqui</header>
      <Styled.ImageDiv>
        <h2>
          Uma ação que parece simples <br></br> para você é a esperança de{" "}
          <br></br> muitos.
        </h2>
        <Styled.BackgroundImage></Styled.BackgroundImage>
        <div className="carrossel">Div do carrossel aqui</div>
        <div className="deslizePopUp">Deslize para ver mais</div>
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
          <button onClick={() => handleClick()} className="InteresseButton">
            Tem interesse?
          </button>
        </div>
        <div className="containerHelp">
          <div className="whyHelpDiv">
            <h3>Por que ajudar?</h3>
            <p>
              A cada <span className="highlighted">5 minutos</span> uma crinaça
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
      <footer> coloque o footer aqui</footer>
    </Styled.Container>
  );
};
