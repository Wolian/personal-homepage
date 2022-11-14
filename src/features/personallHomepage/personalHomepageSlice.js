import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        repo:[],
        status: "initial",
    },
    reducers: {
        fetchRepoGithub: (state) => {
            state.status = "loading";
        },
        fetchRepoGithubSuccess: (state, {payload: fetchRepo}) => {
            state.repo = fetchRepo;
            state.status = "success";
        },
        fetchRepoGithubError: (state) => {
          state.status = "error";
        },
    },
});

export const {
    fetchRepoGithub,
    fetchRepoGithubSuccess,
    fetchRepoGithubError,
} = personalHomepageSlice.actions;

export const selectRepo = (state) => state.personalHomepage;
export const selectRepoState = (state) => selectRepo(state).repo;
export const selectRepoStatus = (state) => selectRepo(state).status;

export default personalHomepageSlice.reducer;