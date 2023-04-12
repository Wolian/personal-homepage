import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 88px;
`;

export const Title = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 48px;
`;

export const Loader = styled.div`
  width: 160px;
  height: 160px;
  border: 11.375px solid rgba(209, 213, 218, 0.3);
  border-left-color: ${({ theme }) => theme.colors.primary};
  margin: 0 auto;
  border-radius: 50%;
  animation: spinLoad 0.7s infinite linear;
  
  @keyframes spinLoad {
    0% {
      transform: rotate(0deg);
    }
    
    100% {
      transform: rotate(360deg);
    }
  }
`;