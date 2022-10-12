import {Header} from "./features/Header";
import {Skills} from "./features/Skills";
import {NextLearn} from "./features/NextLearn";
import {Portfolio} from "./features/Portfolio";
import {Loading} from "./common/Loading";

export const App = () => {
    return(
        <>
            <Header/>
            <Skills/>
            <NextLearn/>
            <Portfolio/>
            <Loading/>
        </>
    );
};