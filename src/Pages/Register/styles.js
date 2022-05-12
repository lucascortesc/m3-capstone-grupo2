import styled from "styled-components";
import ImageRegister from "../../Assets/ImageRegister.png";

export const Container = styled.div`
  height 100vh;
  display: flex;
  align-items: stretch;
  
`;

export const Background = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    background: url(${ImageRegister}) no-repeat center, var(--primaryColor);
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;
  width: 100%
  max-width: 700px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
    }

    p {
      margin-top: 8px;

      a {
        font-weight: bold;
        color: yellow;
      }
    }
  }
`;
