const base = window.location.host.includes("localhost")
  ? "//localhost:3000/"
  : "/";

// @ts-ignore
export const api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 3000,
  withCredentials: true,
});

// @ts-ignore
export const unsplash = axios.create({
  baseURL: "https://source.unsplash.com/random/",
  timeout: 3000,
});
