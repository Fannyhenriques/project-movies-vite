import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
 * {    
  margin: 0;
  padding: 0;
  }
body {
 

max-width: 100%;
margin: 0 auto;
}

p,
h1,
h2,
h3 {
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-style: normal;

}

`;