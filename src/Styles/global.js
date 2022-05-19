import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  
  font-family: 'Montserrat', sans-serif;
}

button {
 cursor: pointer;

 :hover {
  transform: scale(1.10);
  transition: transform .2s;
 }
}

a {
  text-decoration: none;
  color: white;
}

:root{
  --primaryColor: #193E51;
  --primaryColor50: #146666;
  --secondaryColor: #6B6B87;
  --color-highlight: #C3BD2E;
}


`;
