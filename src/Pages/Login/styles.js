import styled from "styled-components";

import LoginImage from "../../Assets/login.png";

export const Container = styled.div`
  font-family: "Montserrat";
  .span {
    :hover {
      cursor: pointer;
    }
    
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: #193e51;

  @media (max-width: 1023px) {
    justify-content: center;
    display: flex;
    align-items: center;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Background = styled.div`
  display: none;
  div {
    display: block;
    border: none;
    background: transparent;
    color: white;
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    display: inline-block;
    width: 50%;
    background: url(${LoginImage}) no-repeat center, #193e51;
    background-size: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Arrow = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  border: none;
  background: transparent;
  color: white;
  font-size: 30px;
`;
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    @media (max-width: 1023px) {
      max-width: 400px;
    }

    h1 {
      margin-bottom: 20px;
      color: #fff;
    }

    p {
      color: #fff;
      margin-top: 0.5rem;
      a {
        font-weight: bold;
        color: #c3bd2e;
      }
    }

    @media (min-width: 1024px) {
      width: 80%;
    }
  }
`;

export const Button = styled.button`
  margin-top: 8px;
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  width: 209px;
  height: 36px;
  border-radius: 5px;
  border: none;
  background-color: #146666;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  div {
    padding-left: 5px;
    color: #c3bd2e;
    display: flex;
  }
`;
