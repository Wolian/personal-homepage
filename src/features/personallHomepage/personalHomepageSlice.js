import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        repositories:[],
        status: "initial",
    },
    reducers: {
        fetchRepoGithub: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchRepoGithubSuccess: (_, {payload: fetchRepo}) => ({
            repositories: fetchRepo,
            status: "success",
        }),
        fetchRepoGithubError: () => ({
            status: "error",
            repositories: null,
        }),
    },
});

export const {
    fetchRepoGithub,
    fetchRepoGithubSuccess,
    fetchRepoGithubError,
} = personalHomepageSlice.actions;

const selectRepo = state => state.personalHomepage;

export const selectRepoState = state => selectRepo(state).repositories;
export const selectRepoStatus = state => selectRepo(state).status;

export default personalHomepageSlice.reducer;