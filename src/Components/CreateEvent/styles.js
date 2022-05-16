import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1;

  form {
    width: 95%;
    max-width: 341px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: white;
    border-radius: 5px;
    background-color: var(--primaryColor);
    position: relative;

    h1 {
      font-family: "Montserrat";
      font-size: 22px;
      margin-left: 24px;
    }

    > div {
      div {
        font-size: 13px;
        .error {
          font-size: 15px;
          color: #e14545;
        }
      }
    }

    .btn-createEvent {
      margin: 10px 0px 10px 0px;
      align-self: center;
    }
  }
`;

export const CloseModal = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;

  :hover {
    color: var(--color-highlight);
    border: 2px solid var(--color-highlight);
    font-weight: 800;
  }

  span {
    margin-bottom: 2px;
  }
`;
