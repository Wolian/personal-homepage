import styled from "styled-components";

export const Wrapper = styled.section`
  text-align: center;
  margin-top: 95px;
`;

export const Warning = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 44px;
`;

export const Button = styled.a`
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  gap: 16px;
  border: 1px solid rgba(209, 213, 218, 0.1);
  border-radius: 4px;
`;

