import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  margin: 0 auto;
  width: 80%;
  div {
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    margin-bottom: 2px;
    margin-top: 10px;
    color: #fff;
  }
  input {
    width: 100%;
    border: none;
    box-sizing: border-box;
    border-radius: 5px;
    background: #c4c4c4;
    padding: 8px;
    color: black;

  }

  .error{
    color: red;
  }
  @media (min-width: 1100px) {
    width: 250px;
  }
`;
