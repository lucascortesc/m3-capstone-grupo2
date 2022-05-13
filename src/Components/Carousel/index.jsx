import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import api from "../../services/api";
import CarouselCard from "../CarouselCard";
import * as Styled from "./styles";

const Carousel = () => {
  const [eventsCarousel, setEventsCarousel] = useState([]);
  const history = useHistory();
  useEffect(() => {
    api
      .get("/eventos?_page=1&_limit=5")
      .then((res) => setEventsCarousel(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.Container>
      <button onClick={() => history.push("/events")}>
        Ver todos os nossos eventos
      </button>
      <Styled.ContainerCarousel>
        {eventsCarousel.data &&
          eventsCarousel.data.map((element) => (
            <CarouselCard element={element} key={element.id} />
          ))}
      </Styled.ContainerCarousel>
    </Styled.Container>
  );
};

export default Carousel;
