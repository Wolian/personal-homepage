import { configureStore } from "@reduxjs/toolkit";
import personalHomepageReducer from "../features/personallHomepage/personalHomepageSlice";

export default configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
    },
});



