import styled from "styled-components";

export const Content = styled.li`
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.05);
    box-shadow: 6px 10px 20px rgba(195, 189, 46, 0.45);
    transition: transform 0.9s 0.2s;
    div > img {
      transform: scale(1.1);
    }
  }
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 300px;
  height: 314px;
  border-radius: 8px;
`;

export const DivImg = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px 8px 0px 0px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 8px 8px 0px 0px;
    background-position: center;
    background-size: cover;
    transition: 0.7s;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;

  div {
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-evenly;
    align-items: flex-start;
    
      h3 {
        text-align: center;
      }
    
      span {
        color: grey;
      }

  }
`;
