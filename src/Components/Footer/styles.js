import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primaryColor50);
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  justify-content: center;
  text-align: center;
  color: #fff;
  padding-bottom: 20px;
  h5 {
    font-size: 25px;
    margin: 15px;
  }
  .footerInfo {
    font-size: 16px;
    font-weight: bold;
  }
  .mediaDiv {
    display: none;
  }
  p {
    margin: 10px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    text-align: left;

    .mediaDiv {
      display: block;
    }
    .mediaDiv > div {
      padding: 3px 20px;
      display: flex;
      align-items: center;
    }
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
    }
  }
`;
