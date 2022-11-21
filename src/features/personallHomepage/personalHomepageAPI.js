import axios from "axios";

export const getRepositories = () =>
    axios.get("https://api.github.com/users/Wolian/repos")
        .then(response => response.data);