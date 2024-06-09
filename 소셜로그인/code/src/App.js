// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";
import GoogleLoginPage from "./GoogleLoginPage";
import Callback from "./Callback";
import NaverLoginPage from "./NaverLoginPage";

function App() {
  return (
    <Router>
      <div className="App">
        <KakaoLogin />
        <GoogleLoginPage />
        <NaverLoginPage />
        <Routes>
          {/* <Route path="/naverLogin" element={<NaverLoginPage />} /> */}
          <Route path="/callback" element={<Callback />} />
          {/* 다른 라우트들을 여기에 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
