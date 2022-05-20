import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.8);

  color: white;

  font-family: Nunito, sans-serif;

  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 12px;

  .modalContainer {
    width: 60%;
    max-width: 350px;
    height: 340px;
    border-radius: 12px;
    background-color: var(--primaryColor);
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1024px) {
      width: 30%;
      height: 290px;
    }
  }

  .closeModal {
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 64px);
    top: 16px;
    display: flex;
    position: relative;
    align-items: center;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    display: inline-block;
    text-align: center;
    margin-top: 20px;
    font-size: 10px;
  }

  .signupButton {
    margin-top: 15px;
  }

  .leave {
    margin-top: 15px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
