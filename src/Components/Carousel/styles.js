import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primaryColor);
  button {
    padding: 10px;
    background-color: rgba(25, 62, 81, 0.6);
    color: #c3bd2e;
    border: none;
    border-radius: 5px;
    display: none;
  }
  @media (min-width: 1024px) {
    background-color: rgba(20, 102, 102, 0.4);
    text-align: end;
    display: flex;
    flex-direction: column;
    padding-top: 5px;
    button {
      display: block;
      width: 200px;
      margin: 0px 20px 0px 20px;
    }
    .initialButton {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: hidden;

  height: 250px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &::-webkit-scrollbar-track {
    /* border: 1px solid #000; */
    padding: 2px 0;
    background-color: rgba(20, 102, 102, 0.4);
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(20, 102, 102, 0.7);
    /* border: 1px solid #000; */
  }

  @media (min-width: 1024px) {
    overflow-x: auto;
    box-shadow: none;
    overflow-y: hidden;
  }
`;
