import {Email, Icons, Link, Talk, Text, Wrapper} from "./styled";
import {email} from "../email";
import {ReactComponent as Github} from "../../../common/icons/Github.svg";
import {ReactComponent as Facebook} from "../../../common/icons/Facebook.svg";
import {ReactComponent as LinkedIn} from "../../../common/icons/LinkedIn.svg";

export const Footer = () => {
  return (
      <Wrapper>
        <Talk> Let's talk!</Talk>
          <Email href={email} title={email}>
              krzysztof.banasiak347@gmail.com
          </Email>
          <Text>
              I am starting to enter the IT community.
              Currently, I would like to start working for a company as a junior frontend developer.
              If my projects interest you , feel free to contact me.
          </Text>
          <Icons>
              <Link
                  href="https://github.com/Wolian"
                  target="_blank"
                  rel="noreferrer"
              >
                  <Github />
              </Link>
              <Link
                  href="https://www.facebook.com/krzysiek.banasiak.37/"
                  target="_blank"
                  rel="noreferrer"
              >
                  <Facebook />
              </Link>
              <Link
                  href="https://www.linkedin.com/in/kbanasiak347/"
                  target="_blank"
                  rel="noreferrer"
              >
                  <LinkedIn />
              </Link>
          </Icons>
      </Wrapper>
  );
};