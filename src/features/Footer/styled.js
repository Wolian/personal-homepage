import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;
`;

export const Talk = styled.p`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.slateGray};
`;

export const Email = styled.a`
  font-weight: 900;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  transition: color 0.4s;
  margin: 24px 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.scienceBlue};
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  max-width: 670px;
  line-height: 1.4;
`;