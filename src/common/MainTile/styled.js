import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 63px;
  padding: 32px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
`;

export const Header = styled.h2`
  font-weight: 900;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin: 0;
`;

export const Content = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(209, 213, 218, 0.3);
  font-size: 18px;
  color: ${({ theme }) => theme.colors.slateGray};
`;

export const List = styled.ul`
  padding: 0;
  column-count: 3;

  @media(max-width: ${({ theme }) => theme.breakpoints.tabletVertical}px) {
    column-count: 2;
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    column-count: 1;
  };
  
`;

export const Item = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
  list-style: none;
  line-height: 1.4;
  
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    line-height: 1.2;
  };
  
  &:before {
    content: "";
    min-width: 9px;
    min-height: 9px;
    border-radius: 50%;
    margin-right: 16px;
    background: ${({ theme }) => theme.colors.scienceBlue};
  }
  
`;