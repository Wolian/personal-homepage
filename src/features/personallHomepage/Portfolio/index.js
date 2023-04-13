import {Header, MyRecentProjects, StyledGithubIcon, SubHeader, Wrapper} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchRepoGithub, selectRepoState, selectRepoStatus} from "../personalHomepageSlice";
import {useEffect} from "react";
import {githubUsername} from "./githubUsername";
import {ProjectTile} from "./ProjectTile";

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
                <StyledGithubIcon />
                <SubHeader>Portfolio</SubHeader>
                <MyRecentProjects>My recent projects</MyRecentProjects>
            </Header>

            <ProjectTile
                status={repoStatus}
                repositories={repositories}
            />
        </Wrapper>
    );
};