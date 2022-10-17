import {Header} from "./features/Header";
import {Skills} from "./features/Skills";
import {NextLearn} from "./features/NextLearn";
import {Portfolio} from "./features/Portfolio";
import {Footer} from "./features/Footer";

export const App = () => {
    return(
        <>
            <Header/>
            <Skills/>
            <NextLearn/>
            <Portfolio/>
            <Footer/>
        </>
    );
};