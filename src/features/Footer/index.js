import {Email, Talk, Text, Wrapper} from "./styled";
import {email} from "../email";

export const Footer = () => {
  return (
      <Wrapper>
        <Talk> Let's talk!</Talk>
          <Email href={email} title={email}>
              krzysiek.banasiak03@gmail.com
          </Email>
          <Text>
              I am starting to enter the IT community.
              Currently, I would like to start working for a company as a junior frontend developer.
              If my projects interest you , feel free to contact me.
          </Text>
      </Wrapper>
  );
};