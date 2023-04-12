import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  transition: 0.4s;
  max-width: 1089px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}px){
    grid-gap: 32px;
  };
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    grid-gap: 12px;
    grid-template-columns: 1fr;
  };
`;

export const Image = styled.img`
  width: 30vw;
  max-width: 398px;
  border-radius: 50%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    max-width: 133px;
    
  }
`;

export const ThisIs = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: initial;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    margin: 0;
  };
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 12px 0 0 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 22px;
    margin-top: 8px;
  };
`;

export const Description = styled.p`
  margin-top: 35px;
  font-size: 20px;
  max-width: 650px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVertical}px){
    margin-top: 16px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 17px;
    max-width: 570px;
  };
`;

export const Email = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 154px;
  gap: 16px;
  padding: 12px 16px;
  margin-top: 32px;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  color: ${({ theme }) => theme.colors.buttonLink.text};
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  
  &:hover{
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
    transition: 0.4s;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    font-size: 18px;
  };

`;