import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  column-count: 3;
`;

export const Item = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
  list-style: none;
  
  &:before {
    content: "";
    min-width: 9px;
    min-height: 9px;
    border-radius: 50%;
    margin-right: 16px;
    background: ${({ theme }) => theme.colors.scienceBlue};
  }
  
`;