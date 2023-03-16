import {Header, Image, SubTitle, TileWrapper, Title, Wrapper} from "./styled";
import BlueGithub from "../../../common/icons/BlueGithub.svg"
import {useDispatch, useSelector} from "react-redux";
import {fetchRepoGithub, selectRepoState, selectRepoStatus} from "../personalHomepageSlice";
import {useEffect} from "react";
import {githubUsername} from "./githubUsername";
import {ProjectTile} from "../../../common/ProjectTile";

export const Portfolio = () => {
    const dispatch = useDispatch();

    const repositories = useSelector(selectRepoState);
    const repoStatus = useSelector(selectRepoStatus);

    useEffect(() => {
        dispatch(fetchRepoGithub(githubUsername));
    }, [dispatch]);


    return (
        <Wrapper>
            <Header>
                <Image src={BlueGithub} alt="Github Logo"/>
                <Title>Portfolio</Title>
                <SubTitle>My recent projects</SubTitle>
                <TileWrapper>
                    <ProjectTile
                        status={repoStatus}
                        repositories={repositories}
                    />
                </TileWrapper>
            </Header>
        </Wrapper>
    );
};