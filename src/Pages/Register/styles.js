import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  img {
    width: 50%;
    
  }

  @media (max-width: 1024px) {
    img {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    

  }
`;

export const StyledForm = styled.form`
  color: white;

  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
