import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Montserrat";
`;

export const FormContainer = styled.div`
  width: 95%;
  height: 90%;
  max-width: 341px;
  max-height: 585px;
  form {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #193e51;
    color: white;

    h1 {
      font-size: 22px;
      font-weight: 800;
    }
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: -5px;
  border: 1px solid transparent;
  border-radius: 100%;
  font-weight: 700;
  background-color: #193e51;

  :hover {
    animation: createBorder 2s;
  }

  @keyframes createBorder {
    /* 25% {
      border-left: 1px solid white;
    }
    50% {
      border-top: 1px solid white;
    }
    75% {
      border-right: 1px solid white;
    }
    100% {
      border-bottom: 1px solid white;
    } */
    from {
        border-left: 100px solid #193e51;
    }
    to {
        border-left: 0px;
        border-top: 100px solid #193e51;
    }
  }
`;
