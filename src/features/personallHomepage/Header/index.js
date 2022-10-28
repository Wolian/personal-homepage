import { Description, Email, Image, Name, ThisIs, Wrapper} from "./styled";
import {email} from "../email";
import Message from "../../../common/icons/Message.svg";
import Me from "./KrzysztofBanasiak.jpg";

export const Header = () => (
  <Wrapper>
      <Image src={Me} alt="Krzysztof Banasiak"/>
      <div>
        <ThisIs> this is </ThisIs>
          <Name> Krzysztof Banasiak </Name>
          <Description>
              👨🏻‍💻 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities
          </Description>
          <Email href={email} title={email}>
              <img src={Message} alt=""/>
              Hire Me
          </Email>
      </div>
  </Wrapper>
);