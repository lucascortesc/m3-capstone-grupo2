import styled from "styled-components";
import ImageRegister from "../../Assets/ImageRegister.png";

export const Container = styled.div`
  .span {
    
    padding: 1px;
    display: none;
    border: none;
    color: white;
    font-size: 30px;
    @media (max-width: 1023px) {
      display: inline;
      position: absolute;
    top: 10px;
    left: 10px;
    }
  }
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: stretch;
  font-family: Nunito, sans-serif;
  background-color: var(--primaryColor);
  color: white;
`;

export const Background = styled.div`
  display: none;
  
  @media (min-width: 1024px) {
    display: inline-block;
    width: 50vw;
    height: 100vh;
    background: url(${ImageRegister}) no-repeat center;
    background-size: cover;
  }
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1024px) {
    width: 50vw;
    height: 100vh;
    max-height: 1024px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 428px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      color: var(--color-highlight);
      font-weight: 700;
    }
    .signupButton {
      @media (max-width: 1023px) {
        margin: 15px 0px 15px 0px;
      }
    }
    h1 {
      font-weight: 800;
    }
  }
  @media (min-width: 1024px) {
    form {
      p {
        margin-top: 15px;
      }
    }
  }
`;

export const VolundaryForm = styled.div`
  width: 100%;
  > div {
    width: 80%;
    > div {
      font-size: 14px;
    }
  }
`;

export const OrganizationForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > div {
    width: 80%;
    > div {
      font-size: 14px;
    }
  }
`;

export const GoalsContainer = styled.div`
  width: 80%;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  > aside {
    width: 50%;
    font-size: 13.5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    > div {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
`;

export const TypeContainer = styled.div`
  width: 80%;
  font-size: 14px;
  > div {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #c4c4c4;
    select {
      width: 95%;
      height: 100%;
      background: none;
      border: none;
      color: var(--primaryColor);
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export const TermsContainer = styled.div`
  width: 80%;
  margin-top: 10px;


  input {
    margin-right: 5px;
  }

  @media (min-width: 1024px) {
    margin: 20px 0px 20px 0px;
  }
`;

