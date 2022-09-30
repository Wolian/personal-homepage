import {Content, Description, Email, Foto, Image, Name, ThisIs, Wrapper} from "./styled";
import {email} from "../email";
import Message from "../../common/icons/Message.svg";

export const Header = () => (
  <Wrapper>
      <Foto>
        <Image src alt="Krzysztof Banasiak"/>
      </Foto>
      <Content>
        <ThisIs> THIS IS </ThisIs>
          <Name> Krzysztof Banasiak </Name>
          <Description>
              I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities
          </Description>
          <Email href={email} title={email}>
              <img src={Message} alt=""/>
              Hire Me
          </Email>
      </Content>
  </Wrapper>
);