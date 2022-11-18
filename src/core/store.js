import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import personalHomepageReducer from "../features/personallHomepage/personalHomepageSlice";
import {personalHomepageSaga} from "../features/personallHomepage/personalHomepageSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(personalHomepageSaga);

export default store;



