import {Button, Paragraph, Header, Wrapper} from "./styled";
import Danger from "../../../../../common/icons/Danger.svg";
import {githubUsername} from "../../githubUsername";


export const Error = () => (
    <Wrapper>
        <img src={Danger} alt="Danger logo"/>
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load GitHub&nbsp;projects.<br/>
            You can check them directly&nbsp;on&nbsp;GitHub
        </Paragraph>
            <Button href={`https://github.com/${githubUsername}`} target="_blank">Go to GitHub</Button>
    </Wrapper>
);