import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--primaryColor);

  color: white;
  
  font-family: Nunito, sans-serif;
  
  position: absolute;
  top:80px;
  left:50px;
  
  max-width: 300px;
 
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  
  .body {
    text-align: left;
    margin: 0 auto;
    width: 80%;

  }


  .modalContainer {
    width: 301px;
    height: 500px;
    border-radius: 12px;
    background-color: var(--primaryColor);
    box-shadow: var(--primaryColor) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
}

.closeModal {
    width: 20px;
    margin-left: 220px;

    border: none;
    
    color: white;
    background-color: var(--primaryColor);
}

.title {
    display: inline-block;
    text-align: center;
    margin-top: 20px;
    font-size: 15px;
}

.leave {
    margin: 20px 0px 0px 79px;
}

.signupButton {
    margin: 20px 0px 0px 22px;

}

}
`;
