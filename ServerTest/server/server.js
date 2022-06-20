const express = require("express");
const path = require("path");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.use(express.static(path.join(__dirname, "react-study/build")));

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/react-study/build/index.html"));
});

app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/react-study/build/index.html"));
});

// 내 ip 주소와 연결
// https://4sii.tistory.com/3
