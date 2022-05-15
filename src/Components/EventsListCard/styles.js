import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #193e51;


  div {
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    background-color: #193e51;
  }
`;

export const Content = styled.li`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: grid;
  margin: 20px;
  width: 300px;
  height: 334px;
  padding: 5px;
  border-radius: 5px;
  img {
    height: 200px;
    width: 290px;
  }

  button {
    width: 111px;
    height: 40px;
    background-color: #c3bd2e;
    border: none;
    border-radius: 5px;
    font-weight: bold;
  }
`;
