import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Wrapper = styled.section`
  margin-top: 72px;
 
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin-top: 48px;
  };
`;

export const Header = styled.header`
  text-align: center;
`;

export const StyledGithubIcon = styled(GithubIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
`;

export const SubHeader = styled.h2`
  margin: 8px 0;
  font-weight: 900;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const MyRecentProjects = styled.p`
  font-weight: normal;
  margin-top: 8px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
  };
`;

