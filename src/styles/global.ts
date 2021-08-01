import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    height: 100%;
    overflow-x: auto;
    overflow-y: auto;
  }

  #root {
      min-height: 100%;
      font-family: 'Montserrat', sans-serif;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased !important;
  }

  body {
    font-size: 1.6rem;
  }

  ul {
    list-style: none;
  }

  a {
    color: #4183c4;
  }
  a:visited {
    color: #4183c4;
  }
  a:hover {
    color: #4183c4;
  }
  a:active {
    color:#4183c4;
  }



  /* media queries */
  @media (max-width: 768px) {
    html {
      font-size: 50%;
    }
  }

`;
