import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

button {
 cursor: pointer;
}

:root{
  --primaryColor: #193E51;
  --primaryColor50: #146666;
  --secondaryColor: #6B6B87;
}


`;
