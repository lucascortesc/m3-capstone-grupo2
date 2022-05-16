import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: #193e51;
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

  height: 100px;
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;


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
  }
  input {
    padding-left: 5px;
    border: none;
    border-radius: 5px;
    height: 36px;
  }
  @media (max-width: 375px) {
    button {
      margin-left: -50px;

    }
    input{
      margin-left: 30px;
    }
  }
`;

export const DivHeader = styled.div`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
`;
