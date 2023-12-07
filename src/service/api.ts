import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/documentar/api/v1",
});

export { api };
