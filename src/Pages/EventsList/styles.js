import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: #fff;
`;
export const Content = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  div {
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export const Section = styled.div`
  height: 60px;
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #6b6b87;
  @media (max-width: 360px) {
    padding-left: 85px;
  padding-right: 30px;
  }
  @media (max-width: 375px) {
    padding-left: 85px;
  padding-right: 30px;
  }
  button {
    display: flex;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #146666;
    font-weight: 550;
    color: #fff;
  }
  form {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    div {
      position: absolute;
      color: grey;
      top: 95px;
      right: 75px;
      @media (max-width: 375px) {
        
      position: absolute;
      color: grey;
      top: 95px;
      right: 45px;
    
      }
    }

    @media (max-width: 768px) {
      input {
        width: 350px;
      }
    }
    @media (max-width: 580px) {
      input {
        width: 180px;
      }
    }
  }
  input {
    padding-left: 5px;
    border: none;
    border-radius: 5px;
    height: 36px;
    width: 450px;
  }
  @media (max-width: 375px) {
    button {
      margin-left: -50px;
    }
  }
`;

export const DivHeader = styled.div`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
`;
