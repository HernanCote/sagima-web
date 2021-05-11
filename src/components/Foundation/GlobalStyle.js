import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Jost:400,600|Raleway&display=swap');

  html {
    height: 100vh;
  }

  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    background-color: #dcdcdc;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  body::-webkit-scrollbar {
    display: none;
  }

  * {
    font-weight: 300;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
