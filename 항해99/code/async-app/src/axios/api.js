import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  //   timeout: 1, // 일부러 에러
});

api.interceptors.request.use(function (config) {
  console.log("인터넷트 요청 성공");
  return config;
});

api.interceptors.response.use(
  function (response) {
    console.log("응답을 받음");
    return response;
  },
  function (error) {
    console.log("인터셉트 응답을 받지 못함", error);
    return Promise.reject(error);
  }
);

export default api;
