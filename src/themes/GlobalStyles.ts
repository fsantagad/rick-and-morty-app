import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    max-width: 960px;
    margin: 0 auto;
  }
  body.modal-open {
    overflow: hidden;
  }
  @media (max-width: 768px) {
    body {
      max-width: 600px;
    }
  }
  `;