import { Header } from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useAllEvents } from "../../Providers/AllEvents";
import { EventsListCard } from "../../Components/EventsListCard";
import { Conteiner, Content, DivAllCard, DivHeader, Paragraph, Section } from "./styles";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export const EventsList = () => {
  const { allEvents } = useAllEvents();
  const history = useHistory();

  const [filteredEvents, setFilteredEvents] = useState([]);

  const FilterEvents = (input) => {
    const inputLower = input.toLowerCase();

    const filtered = allEvents.filter(
      (event) =>
        event.name.toLowerCase().includes(inputLower) ||
        event.category.toLowerCase().includes(inputLower)
    );
    setFilteredEvents(filtered);
  };
  const onsubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Conteiner>
      <DivHeader>
        <Header />
      </DivHeader>

      <Section>
        <button onClick={() => history.push("/")}>Pagina Inicial</button>

        <form onSubmit={(e) => onsubmit(e)}>
          <input
            placeholder="Digite sua pesquisa"
            onChange={(e) => FilterEvents(e.target.value)}
            type="text"
          />
          <div className="BsSearch"  >
          <BsSearch/>
          </div>
        </form>
      </Section>

      <Content>
        <Paragraph>Clique para saber mais</Paragraph>
        <DivAllCard>
          {filteredEvents.length > 0
            ? filteredEvents.map((event) => (
                <EventsListCard key={event.id} event={event} />
              ))
            : allEvents.map((event) => (
                <EventsListCard key={event.id} event={event} />
              ))}
        </DivAllCard>
      </Content>

      <Footer />
    </Conteiner>
  );
};
