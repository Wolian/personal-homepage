import styled from "styled-components";

export const Wrapper = styled.footer`
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 48px;
  } ;
`;

export const Talk = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: initial;
  margin: 0;
`;

export const Address = styled.address`
  font-style: unset;
`;

export const EmailWrapper = styled.div`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 12px 0;
  };
`;

export const Email = styled.a`
  font-weight: 900;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  transition: color 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  };
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textPrimary};
  max-width: 670px;
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  };
`;

export const Icons = styled.p`
  margin-top: 56px;
`;

export const Link = styled.a`
  margin-right: 24px;
`;
