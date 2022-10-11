import {Item, List} from "../../common/MainTile/styled";
import {MainTile} from "../../common/MainTile";

export const NextLearn = () => {
    const NextLearnList = (
        <List>
            <Item>TypeScript</Item>
            <Item>React Native</Item>
            <Item>Node.js</Item>
            <Item>More React</Item>
            <Item>Unit testing</Item>
            <Item>React Context</Item>
        </List>
    );
    return (
        <MainTile
            header={"What I want to learn next 🚀"}
            content={NextLearnList}
        />
    );
};