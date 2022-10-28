import {Header, Image, SubTitle, TileWrapper, Title, Wrapper} from "./styled";
import BlueGithub from "../../../common/icons/BlueGithub.svg"
import { ProjectTile } from "../../../common/ProjectTile";

export const Portfolio = () => {
    return (
        <Wrapper>
            <Header>
                <Image src={BlueGithub} alt="Github Logo"/>
                <Title>Portfolio</Title>
                <SubTitle>My recent projects</SubTitle>
                <TileWrapper>
                    <ProjectTile/>
                    <ProjectTile/>
                    <ProjectTile/>
                    <ProjectTile/>
                </TileWrapper>
            </Header>
        </Wrapper>
    );
};