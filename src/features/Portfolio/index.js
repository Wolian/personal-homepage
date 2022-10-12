import {Header, Image, SubTitle, Title, Wrapper} from "./styled";
import BlueGithub from "../../common/icons/BlueGithub.svg"

export const Portfolio = () => {
    return (
        <Wrapper>
            <Header>
                <Image src={BlueGithub} alt="Github Logo"/>
                <Title>Portfolio</Title>
                <SubTitle>My recent projects</SubTitle>
            </Header>
        </Wrapper>
    );
};