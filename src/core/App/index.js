import {Header} from "../../features/personallHomepage/Header";
import {Skills} from "../../features/personallHomepage/Skills";
import {NextLearn} from "../../features/personallHomepage/NextLearn";
import {Portfolio} from "../../features/personallHomepage/Portfolio";
import {Footer} from "../../features/personallHomepage/Footer";

export const App = () => {
    return(
        <>
            <Header/>
            <main>
                <Skills/>
                <NextLearn/>
                <Portfolio/>
            </main>
            <Footer/>
        </>
    );
};