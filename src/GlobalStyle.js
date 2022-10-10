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
      background-color: ${({ theme }) => theme.colors.whiteLilac};
      color: ${({ theme }) => theme.colors.black};
      display: flex;
      justify-content: center;
      max-width: 1216px;
      margin: 115px auto;
      
      @media (max-width: 767px) {
        margin: 21px 16px;
      };
    }   
`;