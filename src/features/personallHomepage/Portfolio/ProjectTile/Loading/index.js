import {Loader, Title, Wrapper} from "./styled";

export const Loading = () => (
    <Wrapper>
        <Title>Please wait, projects are being loaded...</Title>
        <Loader/>
    </Wrapper>
);