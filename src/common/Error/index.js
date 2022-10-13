import {Button, ButtonWrapper, Text, Warning, Wrapper} from "./styled";
import Danger from "../../common/icons/Danger.svg";

export const Error = () => (
    <Wrapper>
        <img src={Danger} alt="Danger logo"/>
        <Warning>Ooops! Something went wrong...</Warning>
        <Text>Sorry, failed to load GitHub projects. <br/> You can check them directly on GitHub</Text>
        <ButtonWrapper>
            <Button href="https://github.com/Wolian">Go to GitHub</Button>
        </ButtonWrapper>
    </Wrapper>
);