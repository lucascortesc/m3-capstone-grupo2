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
    text-align: center;
  }
  .subscribeDiv > p {
    color: #c3bd2e;
    font-weight: bold;
    font-size: 16px;
    margin: 6px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .subscribeDiv > .defaultBtnSub {
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
  .cancelSub {
    padding: 10px;
    width: 100%;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border-radius: 5px;
    margin-top: 5px;
    background-color: #ff2b2b;
    color: white;
  }
  .cancelSub:hover {
    background-color: red;
  }
  .googleMaps {
    height: 400px;
    /* background-color: red; */
    margin: 40px 20px;
    font-size: 20px;
    font-family: "Montserrat", monospace;
    color: white;
    font-weight: bold;
  }
  @media (min-width: 1024px) {
    .divHeader {
      display: block;
      background-color: red;
    }
    .buttonMobile {
      display: none;
    }
    .buttonsDiv {
      width: 855px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
    }
    .buttonDesktop {
      display: block;
      margin: 15px 0;
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

    .subscribeDiv > .defaultBtnSub {
      background-color: #c3bd2e;
      color: #146666;
    }
    .cancelSub {
      background-color: #ff2b2b;
      color: white;
    }
    .googleMaps {
      margin: 70px auto;
      width: 855px;
    }
  }
`;
