import axios from "axios";

export const getRepositories = () =>
    axios.get("https://docs.github.com/users/Wolian/repos")
        .then(response => response.data);