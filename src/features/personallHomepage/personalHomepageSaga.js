import {fetchRepoGithub, fetchRepoGithubError, fetchRepoGithubSuccess} from "./personalHomepageSlice";
import {getRepositories} from "./personalHomepageAPI";
import { delay, put, call, takeEvery } from "redux-saga/effects";

function* fetchRepoGithubHandler({payload: username}) {
    try {
        yield delay(2000); //just to demo the loading
        const repositories = yield call(getRepositories, username);
        yield put(fetchRepoGithubSuccess(repositories));
    }   catch (error) {
        yield put(fetchRepoGithubError());
    }
}

export function* personalHomepageSaga() {
    yield takeEvery(fetchRepoGithub.type, fetchRepoGithubHandler);
}

