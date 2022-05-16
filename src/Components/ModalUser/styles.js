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

    input {
      margin-top:10px;
      width: 100%;
      border: none;
      box-sizing: border-box;
      border-radius: 5px;
      background: #c4c4c4;
      padding: 8px;
      color: black;
  
    }

  }


  .modalContainer {
      width: 300px;
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
