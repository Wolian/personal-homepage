import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../features/personallHomepage/personalHomepageSaga";

export default function* saga() {
    yield all([
        personalHomepageSaga(),
    ]);
}