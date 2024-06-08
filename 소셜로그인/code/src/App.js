// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<KakaoLogin />} />
          {/* 다른 라우트들을 여기에 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
