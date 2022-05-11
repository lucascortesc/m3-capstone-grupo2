import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    background-image: url("register-background.png");
    width: 50%;

    aside {
      position: fixed;
      right: 25%;
    }
  }
`;

export const StyledForm = styled.form`
  color: white;
  background-color: var(--primaryColor);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
