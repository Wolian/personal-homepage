import { Email, Talk, Text, Wrapper, Address, EmailWrapper } from "./styled";
import { email } from "../email";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
  return (
    <Wrapper>
      <Talk> Let's talk!</Talk>
      <Address>
        <EmailWrapper>
          <Email href={email} title={email}>
            krzysztof.banasiak347@gmail.com
          </Email>
        </EmailWrapper>
        <Text>
          I am starting to enter the IT community. Currently, I would like to
          start working for a company as a junior frontend developer. If my
          projects interest you, feel free to contact me.
        </Text>
        <SocialIcons />
      </Address>
    </Wrapper>
  );
};
