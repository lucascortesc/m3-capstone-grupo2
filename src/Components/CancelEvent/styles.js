import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  font-family: "Montserrat";
  color: white;
  z-index: 1;

  > div {
    width: 95%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 10px;
    border-radius: 5px;
    background-color: var(--primaryColor);

    .loading {
      align-self: center;
      margin-top: 10px 0px;
    }

    p {
      font-weight: 700;
      text-align: center;
      text-shadow: 3px 3px 1px rgb(0, 0, 0, 0.8);
    }

    > div {
      button {
        text-shadow: 3px 3px 1px rgb(0, 0, 0, 0.8);
      }
    }

    @media (min-width: 1024px) {
      width: 300px;
      background-color: var(--primaryColor);
    }
  }
`;
