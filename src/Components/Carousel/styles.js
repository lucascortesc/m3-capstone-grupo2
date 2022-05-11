import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primaryColor50);
  text-align: end;

  button {
    margin: 10px 20px 0 20px;
    padding: 10px;
    background-color: #193e51;
    color: #c3bd2e;
    border: none;
    border-radius: 5px;
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  background-color: var(--primaryColor50);
  height: 250px;

  @media (min-width: 1024px) {
    overflow-x: auto;
  }
`;
