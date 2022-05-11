import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border: 2px solid #fff;
  background-color: #fff;
  height: 205px;
  border-radius: 5px;
  width: 290px;
  img {
    width: 270px;
    height: 170px;
  }
  p {
    font-weight: bold;
    font-family: Nunito, sans-serif;
    font-size: 18px;
    padding: 2px;
  }
`;
