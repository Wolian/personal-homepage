import styled from "styled-components";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;
  transition: 0.4s;
  max-width: 1089px;
  
  @media (max-width: 767px){
    display: flex;
    flex-direction: column;
    gap: 0;
  };
`;

export const Image = styled.img`
  max-width: 398px;
  max-height: 398px;
  border-radius: 50%;
  
  @media (max-width: 767px){
    max-width: 133px;
    max-height: 133px;
    margin-top: 12px;
    
  }
`;

export const Content = styled.div`
  margin-top: 64px;

  @media (max-width: 767px){
    margin-top: 12px;
  };
`;

export const ThisIs = styled.p`
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.slateGray};

  @media (max-width: 767px){
    margin: 0;
  };
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 38px;
  color: ${({ theme }) => theme.colors.black};
  
  @media (max-width: 767px){
    font-size: 22px;
  };
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.slateGray};

  @media (max-width: 767px){
    font-size: 17px;
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
  background: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.iron};
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  
  &:hover{
    box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    transition: 0.4s;
  }
  
`;