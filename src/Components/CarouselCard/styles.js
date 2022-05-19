import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border: 2px solid #fff;
  background-color: #fff;
  height: 92%;
  border-radius: 5px;
  width: 290px;
  min-width: 290px;
  cursor: pointer;

  &:hover {
    border: 2px solid #c3bd2e;
    transform: scale(1.1);
    transition: transform 0.9s 0.2s;

    div > img {
      transform: scale(1.1);
    }
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

export const DivImg = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 170px;
  border-radius: 5px 5px 0px 0px;
  
  img {
    width: 100%;
    min-height: 170px;
    height: 170px;
    border-radius: 5px 5px 0px 0px;
    background-position: center;
    background-size: cover;
    transition: 0.7s;
  }
`;

export const DivInfos = styled.div``;
