import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 96px;
  display: grid;
  justify-items: center;
  grid-gap: 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-gap: 24px;
  };
`;

export const Header = styled.h3`
  font-size: 24px;
  font-weight: 700;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
  };
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.4;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 16px;
  };
`;

export const Button = styled.a`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  color: ${({ theme }) => theme.colors.buttonLink.text};
  padding: 12px 16px;
  gap: 16px;
`;

