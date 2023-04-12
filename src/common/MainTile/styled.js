import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 63px;
  padding: 32px;
  background: ${({ theme }) => theme.colors.boxBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 48px;
    padding: 16px;
  };
`;

export const Header = styled.h2`
  font-weight: 900;
  font-size: 30px;
  display: flex;
  align-items: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Content = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(209, 213, 218, 0.3);
  font-size: 18px;
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
    background: ${({ theme }) => theme.colors.primary};
  }
  
`;