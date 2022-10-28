import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 72px;
`;

export const Header = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  
`;

export const Title = styled.h2`
  margin: 8px 0;
  font-weight: 900;
  font-size: 30px;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  margin: 0 0 24px 0;
`;

export const TileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  };
`;