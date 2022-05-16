import { Header } from "../../Components/Header";
import Footer from "../../Components/Footer";
import { useAllEvents } from "../../Providers/AllEvents";
import { EventsListCard } from "../../Components/EventsListCard";
import { Conteiner, Content, DivHeader, Section } from "./styles";
import { useHistory } from "react-router-dom";
export const EventsList = () => {
  const { allEvents } = useAllEvents();
  const history = useHistory();

  return (
    <Conteiner>
      <DivHeader>
        <Header />
      </DivHeader>

      <Section>
        <button onClick={() => history.push("/")}>Voltar</button>
        {/* <select name="Categoria" id="">
          <option value="">Categoria</option>
          <option value="">Categoria</option>
          <option value="">Categoria</option>
        </select>
        <button>Pesquisar</button> */}
      </Section>

      <Content>
        <div>
          {allEvents.map((event) => (
            <EventsListCard key={event.id} event={event} />
          ))}
        </div>
      </Content>

      <Footer />
    </Conteiner>
  );
};
