import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  background: none;
  z-index: 9999999;

  @media (min-width: 1024px) {
    height: 115px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  padding: 0px 25px;

  >div {
      display: flex;
      gap: 20px;
  }

  h1 {
    font-family: "Montserrat";
    font-weight: 800;
    color: var(--color-highlight);
    font-size: 20px;
  }

  @media (max-width: 280px) {
      flex-direction: column;
  } 

  @media (min-width: 1024px) {
    padding: 0px 70px;

    h1 {
      font-size: 40px;
    }
  }
`;
