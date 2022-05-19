import styled from "styled-components";

export const Container = styled.div``;

export const ImageDiv = styled.div`
  /* width: 99vw; */
  height: 450px;
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
      font-size: 40px;
      padding-top: 70px;
    }
    .deslizePopUp {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-left: 20px;
      margin-top: 5px;
      width: 200px;
      padding: 5px;
      border-radius: 5px;
      text-align: center;
      background-color: #193e51;
      color: #c3bd2e;
      animation: jumpButton infinite 2s;
    }
  }

  @keyframes jumpButton {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(5px);
    }
    40% {
      transform: translateY(0px);
    }
    60% {
      transform: translateY(5px);
    }
    100% {
      transition: 1.5s;
      transform: translateY(0px);
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
  @media (min-width: 1024px) {
  }
`;

export const InfosDiv = styled.div`
  background-color: var(--primaryColor);
  color: #fff;
  /* text-align: left; */
  padding: 30px 30px 40px 30px;
  word-spacing: 5px;
  font-family: Nunito, sans-serif;
  margin-top: -2px;

  .whyHelpDiv {

      p > span {
        color: var(--color-highlight);
      }
    }

  h3 {
    padding: 15px 0px;
    font-size: 24px;
    text-align: center;
    color: var(--color-highlight);
  }
  p {
    margin-bottom: 3px;
    text-align: justify;
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
  .InteresseButton > p {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .highlighted {
    color: #c3bd2e;
    font-weight: bold;
  }
  @media (min-width: 1024px) {
    margin-top: 0px;
    h3 {
      text-align: left;
    }
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

export const Highlight = styled.p`
  font-size: 1.25rem;

`