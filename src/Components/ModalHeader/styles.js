import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: red; */
  z-index: 999999;
  display: flex;
  justify-content: flex-end;
  .modal {
    background-color: var(--primaryColor);
    height: 60px;
    display: flex;
    flex-direction: column;
    /* padding: 5px; */
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin: 75px 0px 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100px;
    border-radius: 15px;
    position: absolute;
    animation: appearFromTop 1s;
  }
  .modal > button {
    width: 100%;
    background-color: var(--primaryColor);
    border: none;
    color: #c3bd2e;
    font-weight: bold;
  }

  .pontinha {
    width: 20px;
    height: 20px;
    position: absolute;
    background-color: var(--primaryColor);
    top: 0;
    transform: rotate(45deg);
    margin-top: 74px;
    margin-right: 37px;
  }
  @media (min-width: 1024px) {
    .modal {
      margin: 100px 25px 10px 10px;
      height: 120px;
      width: 130px;
    }
    .modal > button {
      font-size: 16px;
    }
    .pontinha {
      margin-top: 97px;
      margin-right: 80px;
    }
  }

  @keyframes appearFromTop {
    from {
      transform: translateY(-10px)
    }
    to {
      transform: translateY(0px);
    }
  }
`;
