import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  .modalContainer {
    width: 90%;
    background-color: var(--primaryColor);
    border-radius: 5px;
    text-align: center;
    color: white;
    padding: 0px 5px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-family: "Montserrat", monospace;
    font-weight: bold;
    max-width: 400px;
  }
  .modalHeader > p {
    margin: 10px;
    font-weight: normal;
    font-size: 16px;
  }

  .eventName {
    font-weight: bold !important;
    font-size: 20px !important;
  }

  .modalButtons {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .modalButtons > p {
    margin: 5px;
    font-weight: normal;
    font-size: 16px;
  }
  .modalButtons > button {
    width: 80%;
    height: 32px;
    padding: 5px;
    color: white;
    font-family: "Montserrat", monospace;
    font-weight: bold;
  }
  .modalConfirm {
    background-color: #ff2b2b;
    border: none;
    border-radius: 5px;
  }
  .modalConfirm:hover {
    background-color: red;
  }
  .closeModal {
    background-color: var(--primaryColor);
    border: none;
  }
`;
