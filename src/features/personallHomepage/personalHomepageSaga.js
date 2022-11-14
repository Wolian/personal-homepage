import {fetchRepoGithub, fetchRepoGithubError, fetchRepoGithubSuccess} from "./personalHomepageSlice";
import {getRepositories} from "./personalHomepageAPI";
import { delay, put, call, takeEvery } from "redux-saga/effects";

function* fetchRepoGithubHandler() {
    try {
        yield delay(2000); //just to demo the loading
        const repoGithub = yield call(getRepositories);
        yield put(fetchRepoGithubSuccess(repoGithub));
    }   catch (error) {
        yield put(fetchRepoGithubError());
    }
}

export function* personalHomepageSaga() {
    yield takeEvery(fetchRepoGithub.type, fetchRepoGithubHandler);
}

