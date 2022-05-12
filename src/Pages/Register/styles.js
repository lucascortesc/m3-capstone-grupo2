import styled from "styled-components";
import ImageRegister from "../../Assets/ImageRegister.png";

export const Container = styled.div`
  height 100vh;
  display: flex;
  align-items: stretch;
  width:100%;
  background-color: var(--primaryColor);
  
`;

export const Background = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    background: url(${ImageRegister}) no-repeat left;
    background-size: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  jusitfy-content: center;
  width: 50%
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      color: white;
      margin-bottom: 32px;
    }

    p {
      margin-top: 8px;

      a {
        font-weight: bold;
        color: var(--color-highlight);
      }
    }
  }
`;
