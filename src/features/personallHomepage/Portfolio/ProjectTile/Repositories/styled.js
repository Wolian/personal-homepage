import styled from "styled-components";

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    grid-template-columns: 1fr;
    grid-gap: 24px;
  };
`;

export const Tile = styled.div`
  padding: 56px;
  margin: 0;
  font-size: 18px;
  background: ${({ theme }) => theme.colors.boxBackround};
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
    transition: 0.4s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    padding: 20px;
  };
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  margin-top: 24px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    margin-top: 16px;
    font-size: 14px;
  };
`;

export const Repo = styled.div`
  margin-bottom: 8px;
  
`;

export const PreLink = styled.span`
  width: 80px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  line-height: 1.6;
  margin-left: 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;