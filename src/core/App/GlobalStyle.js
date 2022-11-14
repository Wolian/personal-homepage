import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
      font-family: 'Inter', sans-serif;
      transition: background 0.3s;
      background-color: ${({ theme }) => theme.colors.whiteLilac};
      color: ${({ theme }) => theme.colors.black};
      letter-spacing: 0.05em;
      word-break: break-word;
      max-width: 1216px;
      margin: 115px auto;
      padding-left: 16px;
      
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 21px 16px;
        padding-left: 0;
      };
    }   
`;