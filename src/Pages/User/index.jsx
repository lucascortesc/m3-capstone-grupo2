import * as Styled from "./styles";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Redirect } from "react-router-dom";
import { useUser } from "../../Providers/User";
import { useAllEvents } from "../../Providers/AllEvents";
import { EventCardOrganization } from "../../Components/EventCardOrganization";
import { EventCardVoluntary } from "../../Components/EventCardVoluntary";
import { Link } from "react-router-dom";
import { CreateEvent } from "../../Components/CreateEvent";
import { useState } from "react";
import { useEffect } from "react";

export const User = () => {
  const { user } = useUser();
  const { allEvents } = useAllEvents();
  const [modalCreateEvent, setModalCreateEvent] = useState(false);

  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <Styled.Container>
      <Header userName={user?.name} />
      {user?.type === "voluntary" ? (
        <>
          <Styled.MessageContainer>
            {user?.events.length > 0 ? (
              <p>
                Obrigado por fazer parte de um evento, a <span>ajuda</span> é
                promover a <span>solidariedade</span>, a{" "}
                <span>generosidade</span> e a <span>empatia</span>!
              </p>
            ) : (
              <p>Hoje está um lindo dia para ajudar pessoas, não acha?</p>
            )}
          </Styled.MessageContainer>
          <Styled.VoluntaryContainer>
            {user?.events.length > 0 ? (
              <div className="events-filled">
                <ul>
                    <>
                      {user.events.map((id, index) => (
                        <EventCardVoluntary alreadyHave={true} eventId={id} key={index} />
                      ))}
                    </>
                </ul>
              </div>
            ) : (
              <div className="events-empty">
                <p>Que tal começar com essa?</p>
                <div>
                  {allEvents && (
                    <EventCardVoluntary
                      element={
                        allEvents[
                          Math.floor(Math.random() * allEvents.length - 1)
                        ]
                      }
                    />
                  )}
                  <Link to="/events">
                    <Button
                      padding="10px 15px"
                      background="var(--primaryColor50)"
                      color="var(--color-highlight)"
                      weigth="800"
                    >
                      Ver todos os eventos
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </Styled.VoluntaryContainer>
        </>
      ) : (
        <>
          <Styled.MessageContainer>
            {user?.events.length > 0 ? (
              <p>
                Obrigado por fazer parte deste projeto! A <span>ajuda</span> é
                promover a <span>solidariedade</span>, a{" "}
                <span>generosidade</span> e a <span>empatia</span>!
              </p>
            ) : (
              <p>Hoje está um lindo dia para ajudar pessoas, não acha?</p>
            )}
          </Styled.MessageContainer>
          <Styled.OrganizationContainer>
            {modalCreateEvent && <CreateEvent setModal={setModalCreateEvent} />}

            {user?.events.length > 0 ? (
              <div className="events-filled">
                <Styled.AddModal onClick={() => setModalCreateEvent(true)}>
                  +
                </Styled.AddModal>
                <ul>
                    <>
                      {user?.events.map((id, index) => (
                        <EventCardOrganization eventId={id} key={index} />
                      ))}
                    </>
                </ul>
              </div>
            ) : (
              <div className="events-empty">
                <Styled.AddModal onClick={() => setModalCreateEvent(true)}>
                  +
                </Styled.AddModal>
                <p>Sua organização ainda não criou um evento...</p>
              </div>
            )}
          </Styled.OrganizationContainer>
        </>
      )}
    </Styled.Container>
  );
};
