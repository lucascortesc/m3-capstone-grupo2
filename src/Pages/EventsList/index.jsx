import { Header } from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useAllEvents } from "../../Providers/AllEvents";
import { EventsListCard } from "../../Components/EventsListCard";
import { Container } from "../../Components/EventsListCard/styles";

export const EventsList = () => {
  const { allEvents } = useAllEvents();

  return (
    <>
      <Header />
      {/* <section>
        <button>Voltar</button>
        <select name="Categoria" id="">
          <option value="">Categoria</option>
          <option value="">Categoria</option>
          <option value="">Categoria</option>
        </select>
        <button>Pesquisar</button>
      </section> */}

      <Container>
        <div>
          {allEvents.map((event) => (
            <EventsListCard key={event.id} event={event} />
          ))}
        </div>
      </Container>

      <Footer />
    </>
  );
};
