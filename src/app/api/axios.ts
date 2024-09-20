import axios from "axios";

const instance = axios.create({
  baseURL: "https://nomad-movies.nomadcoders.workers.dev/movies",
});

export default instance;
