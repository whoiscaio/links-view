import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: Poppins, sans-serif;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    background-color: #f8f8f8;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .buttonPattern {
    padding: .4rem;

    background-color: #333;
    border: 0;
    border-radius: .4rem;
    
    font-size: 1.3rem;
    color: #ffffff;

    transition: transform .12s ease-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export default GlobalStyle
