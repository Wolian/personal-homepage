import {Content, Header, Wrapper} from "./styled";

export const MainTile = ({header, content}) => (
    <Wrapper>
        <Header>{header}</Header>
        <Content>{content}</Content>
    </Wrapper>
);