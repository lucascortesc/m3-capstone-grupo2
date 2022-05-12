import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primaryColor);

  .divHeader {
    display: none;
  }
  .buttonDesktop {
    display: none;
  }
  .buttonMobile {
    background: none;
    border: none;
    position: absolute;
    z-index: 999999;
    padding: 5px;
    color: white;
  }
  .buttonMobile > svg {
    width: 20px;
    height: 20px;
  }
  .subscribeDiv {
    margin: 20px;
  }
  .subscribeDiv > p {
    color: #c3bd2e;
    font-weight: bold;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .subscribeDiv > button {
    padding: 10px;
    width: 100%;
    background-color: #146666;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border-radius: 5px;
    margin-top: 5px;
  }
  .teste {
    height: 300px;
    /* background-color: red; */
  }
  .googleMaps {
    height: 300px;
    background-color: red;
  }
  @media (min-width: 1024px) {
    .divHeader {
      display: block;
      background-color: red;
      height: 40px;
    }
    .buttonMobile {
      display: none;
    }
    .buttonDesktop {
      display: block;
      margin: 15px 140px 15px 140px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #146666;
      font-weight: 550;
      color: #fff;
    }
    .subscribeDiv {
      width: 20%;
      margin: 20px auto;
      text-align: center;
    }
    .subscribeDiv > p {
      font-size: 20px;
    }
    .subscribeDiv > button {
      background-color: #c3bd2e;
      color: #146666;
    }
    .googleMaps {
      margin: 70px 140px;
    }
  }
`;
