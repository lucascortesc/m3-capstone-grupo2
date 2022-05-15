import styled from "styled-components";

export const Container = styled.div`
  img {
    height: 40vh;
    object-fit: cover;
    width: 100vw;
  }
  .divInfos {
    color: #fff;
    padding: 10px 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: flex;
    justify-content: space-between;
  }
  .divName > h3 {
    font-weight: bold;
    width: 90%;
  }
  .divName > span {
    font-size: 12px;
  }
  .divVoluntarys > p {
    color: #c3bd2e;
  }
  .divVoluntarys > span {
    font-weight: bold;
    font-size: 25px;
  }
  .divDescription {
    color: #fff;
    padding: 10px 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  @media (min-width: 1024px) {
    background-color: #146666;
    margin: 0 auto;
    border-radius: 10px;
    width: 855px;

    img {
      width: 100%;
      object-fit: cover;
      height: 372px;
    }
    .divInfos {
      margin-top: 0;
      padding: 20px;
    }
    h3 {
      font-size: 18px;
    }
    .divDescription {
      padding: 20px;
      background-color: #146666;
      border-radius: 0 0 5px 5px;
    }
    .divDescription > p {
    }
  }
`;
