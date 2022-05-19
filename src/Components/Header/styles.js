import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  background: #193e51;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  img {
    cursor: pointer;
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

  .logo {
    width: 60px;
  }
  > div {
    display: flex;
    gap: 20px;
  }

  h1 {
    display: flex;
    align-items: center;
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
