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
import ModalCancelSubs from "../../Components/ModalCancelSubs";
import ModalAddSubs from "../../Components/ModalAddSubs";
import MapWithAMarker from "../../Components/GoogleMaps";
import axios from "axios";
import ReactLoading from "react-loading";

export const Event = () => {
  const { allEvents } = useAllEvents();
  const { user } = useUser();
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [registered, setRegistered] = useState("");
  const [modalAdd, setModalAdd] = useState(false);
  const [modalCancel, setModalCancel] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const actualEvent = allEvents.find((e) => e.id === Number(id));
    setEvent(actualEvent);
    if (user) {
      setRegistered(
        actualEvent &&
          actualEvent.voluntarys.find((e) => e.id === Number(user.id))
      );
    }
  }, [allEvents]);

  useEffect(() => {
    if (!!event) {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${event?.location},Brasil,+CA&key=AIzaSyAJ8vU8FUxOZ7NtZnBKF_0nDdZ1qa47KWk
   `
        )
        .then((res) => {
          setLatitude(res.data.results[0].geometry.location.lat);
          setLongitude(res.data.results[0].geometry.location.lng);
        })
        .catch((err) => console.log(err));
    }
  }, [event]);

  const history = useHistory();

  return (
    <Styled.Container>
      <div className="divHeader">
        <Header />
      </div>
      <div className="buttonsDiv">
        <button onClick={() => history.goBack()} className="buttonMobile">
          <BsArrowLeft />
        </button>
        <button onClick={() => history.goBack()} className="buttonDesktop">
          Voltar
        </button>
      </div>
      <PageEventCard event={event} />
      <div className="subscribeDiv">
        {isLoading ? (
          <div className="loading">
            <ReactLoading type="spin" color="#c3bd2e" height={30} width={30} />
          </div>
        ) : event?.status === "canceled" ? (
          <span className="canceled">Evento cancelado</span>
        ) : user.type === "organization" ? (
          <></>
        ) : registered ? (
          <>
            <p>Usuário já cadastrado</p>
            <button onClick={() => setModalCancel(true)} className="cancelSub">
              Cancelar inscrição
            </button>
          </>
        ) : event?.voluntarys.length >= event?.maxVoluntarys ? (
          <>
            <p>Tem interesse?</p>
            <p>Número de voluntários máximo atingido</p>
          </>
        ) : !!user ? (
          <>
            <p>Tem interesse?</p>{" "}
            <button className="defaultBtnSub" onClick={() => setModalAdd(true)}>
              Inscrever-se no evento
            </button>
          </>
        ) : (
          <>
            <p>Tem interesse?</p>
            <button
              className="defaultBtnSub"
              onClick={() => history.push("/login")}
            >
              Faça o login para se inscrever
            </button>
          </>
        )}
      </div>
      <div className="googleMaps">
        <p>Não sabe onde encontrar?</p>
        {latitude && (
          <MapWithAMarker
            location={event.location}
            latitude={latitude}
            longitude={longitude}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ8vU8FUxOZ7NtZnBKF_0nDdZ1qa47KWk&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        )}
      </div>
      <Footer />
      {modalAdd && (
        <ModalAddSubs
          setModalAdd={setModalAdd}
          event={event}
          setIsLoading={setIsLoading}
        />
      )}
      {modalCancel && (
        <ModalCancelSubs
          setModalCancel={setModalCancel}
          setIsLoading={setIsLoading}
          event={event}
        />
      )}
    </Styled.Container>
  );
};
