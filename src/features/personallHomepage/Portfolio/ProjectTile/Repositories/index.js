import {Description, Link, List, PreLink, Repo, Tile, Title} from "./styled";

export const Repositories = ({ repositories }) => (
     <List>
         {repositories?.map(({ id, name, description, homepage, html_url}) => (
        <Tile key={id}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Repo>
                <PreLink>Demo:</PreLink>
                <Link href={homepage}>{homepage}</Link>
            </Repo>
            <Repo>
                <PreLink>Code:</PreLink>
                <Link href={html_url}>{html_url}</Link>
            </Repo>
        </Tile>
        ))}
    </List>
);