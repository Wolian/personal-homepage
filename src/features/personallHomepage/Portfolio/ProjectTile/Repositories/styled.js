import styled from "styled-components";

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  grid-gap: 32px;
`;

export const Tile = styled.div`
  padding: 56px;
  margin: 0;
  font-size: 18px;
  background: ${({ theme }) => theme.colors.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;

  &:hover {
    border: 6px solid rgba(3, 102, 214, 0.2);
    transition: 0.4s;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.scienceBlue};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.slateGray};
  max-width: 480px;
  line-height: 140%;
`;

export const Repo = styled.div`
  
  margin-bottom: 8px;
  
`;

export const PreLink = styled.span`
  width: 80px;
  color: ${({ theme }) => theme.colors.slateGray};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.scienceBlue};
  text-decoration: none;
  line-height: 140%;
  margin-left: 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;