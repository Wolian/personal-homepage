import {Description, Link, PreLink, Repo, Tile, Title} from "./styled";

export const Repositories = ({ repositories }) => (
    repositories?.map((repo) => (
            <Tile key={repo.id}>
                <Title>{repo.name}</Title>
                <Description>{repo.description}</Description>
                <Repo>
                    <PreLink>Demo:</PreLink>
                    <Link href={repo.homepage}>{repo.homepage}</Link>
                </Repo>
                <Repo>
                    <PreLink>Code:</PreLink>
                    <Link href={repo.html_url}>{repo.html_url}</Link>
                </Repo>
            </Tile>
        )
    ));