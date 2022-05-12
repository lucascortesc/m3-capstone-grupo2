import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border: 2px solid #fff;
  background-color: #fff;
  height: 89%;
  border-radius: 5px;
  width: 290px;

  cursor: pointer;
  &:hover {
    border: 2px solid #c3bd2e;
  }
  img {
    width: 270px;
    height: 170px;
  }
  p {
    font-weight: bold;
    font-family: Nunito, sans-serif;
    font-size: 15px;

    text-align: center;
  }
  @media (min-width: 1024px) {
    img {
      object-fit: fill;
    }
  }
`;
