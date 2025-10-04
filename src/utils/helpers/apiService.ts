import axios from "axios";

const baseURL = "https://newsapi.org/v2";
const apiKey = "ffe5d6a4d50847379cfe4a3675fb4724";

export function get(url: string) {
  const response = axios.get(`${baseURL}${url}&apiKey=${apiKey}`);
  return response;
}
