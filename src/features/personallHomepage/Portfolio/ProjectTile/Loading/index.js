import {Loader, Title, Wrapper} from "./styled";

export const Loading = () => (
    <Wrapper>
        <Title>Please wait, projects are&nbsp;being&nbsp;loaded...</Title>
        <Loader/>
    </Wrapper>
);