import {Description, Link, PreLink, Repo, Tile, Title} from "./styled";

export const ProjectTile = () => {
    return(
        <Tile>
            <Title>Movies Browser</Title>
            <Description>
                Project description, e.g. website where you can search for favourite movies and people.
                Project description, e.g. website where you can search.
            </Description>
            <Repo>
                <PreLink>Demo:</PreLink>
                <Link href="https://wolian.github.io/movies-browser/">https://wolian.github.io/movies-browser/</Link>
            </Repo>
            <Repo>
                <PreLink>Code:</PreLink>
                <Link href="https://github.com/Wolian/movies-browser#movies-browser-">https://github.com/Wolian/movies-browser#movies-browser-</Link>
            </Repo>
        </Tile>
    );
};