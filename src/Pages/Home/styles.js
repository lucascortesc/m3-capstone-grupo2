import styled from "styled-components";

export const Container = styled.div`
  header {
    height: 12vh;
    background-color: red;
  }
  footer {
    height: 200px;
    background-color: red;
  }
  @media (min-width: 1024px) {
  }
`;

export const ImageDiv = styled.div`
  /* width: 99vw; */
  height: 200px;
  position: relative;
  h2 {
    color: white;
    padding-top: 110px;
    margin-left: 20px;
    font-size: 20px;
    /* width: 80%; */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
  }
  .deslizePopUp {
    display: none;
  }
  @media (min-width: 1024px) {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
      font-size: 40px;
      padding: 0;
    }
    .deslizePopUp {
      display: block;
      margin-left: 20px;
      margin-top: 5px;
      width: 200px;
      padding: 5px;
      border-radius: 5px;
      text-align: center;
      background-color: #193e51;
      color: #c3bd2e;
    }
  }
`;
export const BackgroundImage = styled.div`
  background: url("https://cdn1.photostockeditor.com/c/1812/human-five-children-smiling-while-doing-peace-hand-sign-people-people-image.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  z-index: -1;
`;

export const InfosDiv = styled.div`
  background-color: var(--primaryColor);
  color: #fff;
  /* text-align: left; */
  padding: 30px 30px 40px 30px;
  word-spacing: 5px;
  font-family: Nunito, sans-serif;
  margin-top: 200px;
  h3 {
    padding: 15px 0px;
    font-size: 24px;
  }
  p {
    margin-bottom: 3px;
  }
  .InteresseButton {
    padding: 10px;
    width: 260px;
    background-color: #146666;
    color: white;
    border: none;
    border-radius: 5px;
    margin: 10px auto;
    font-weight: bold;
  }
  .highlighted {
    color: #c3bd2e;
    font-weight: bold;
  }
  @media (min-width: 1024px) {
    margin-top: 0px;

    .whoAreDiv {
      width: 40%;
    }
    .containerHelp {
      display: flex;
      justify-content: end;
    }
    .whyHelpDiv {
      width: 40%;
    }
  }
`;
