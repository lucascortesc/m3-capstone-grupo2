import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: #193e51;
`;
export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

`;

export const Paragraph = styled.p`
  color: var(--color-highlight);
  font-size: 2rem;
  margin-top: 15px;
  text-align: center;
`

export const DivAllCard = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
  background-color: #146666;
  @media (max-width: 425px) {
    padding-left: 60px;
    padding-right: 10px;
  }
  button {
    display: flex;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #193e51;
    font-weight: 550;
    color: #fff;
  }
  form {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    div {
      position: absolute;
      color: grey;
      top: 11px;
      right: 13px;
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
