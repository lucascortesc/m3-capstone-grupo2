import styled from "styled-components";


export const Conteiner = styled.div`
background-color:#193e51;

`
export const Content = styled.ul`
 
   display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
 
  
  div {
    max-width: 1440px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
   
    
  }


  

`;


export const Section = styled.div`
    button{
      display: flex;
      margin: 15px 25px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      background-color: #146666;
      font-weight: 550;
      color: #fff;
    }
    @media  (min-width: 1024px) {
        button{
            margin: 15px 75px
        } ;
    }
`
export const DivHeader = styled.div`
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);


`