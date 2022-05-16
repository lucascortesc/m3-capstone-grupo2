import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../../Components/Footer";
import PageEventCard from "../../Components/PageEventCard";
import * as Styled from "./styles";
import { Header } from "../../Components/Header";
import { useUser } from "../../Providers/User";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAllEvents } from "../../Providers/AllEvents";

export const Event = () => {
  const { allEvents } = useAllEvents();
  const { user } = useUser();
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [registered, setRegistered] = useState("");

  useEffect(() => {
    const actualEvent = allEvents.find((e) => e.id == id);
    setEvent(actualEvent);
    if (user) {
      setRegistered(
        actualEvent && actualEvent.voluntarys.find((e) => e.id == user.id)
      );
    }
  }, [allEvents]);

  const history = useHistory();

  return (
    <Styled.Container>
      <div className="divHeader">
        <Header />
      </div>
      <div className="buttonsDiv">
        <button onClick={() => history.push("../")} className="buttonMobile">
          <BsArrowLeft />
        </button>
        <button onClick={() => history.push("../")} className="buttonDesktop">
          Voltar
        </button>
      </div>
      <PageEventCard />
      <div className="subscribeDiv">
        <p>Tem interesse?</p>
        {event?.voluntarys.length >= event?.maxVoluntarys ? (
          <p>Número de voluntários máximo atingido</p>
        ) : registered ? (
          <button className="cancelSub">Cancelar inscrição</button>
        ) : !!user ? (
          <button className="defaultBtnSub">Inscrever-se no evento</button>
        ) : (
          <button
            className="defaultBtnSub"
            onClick={() => history.push("/login")}
          >
            Faça o login para se inscrever
          </button>
        )}
      </div>
      <div className="googleMaps">google maps api</div>
      <Footer />
    </Styled.Container>
  );
};
