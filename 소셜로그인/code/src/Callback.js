// src/Callback.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href.includes("naver")) {
      window.naver.LoginWithNaverId.getLoginStatus(status => {
        if (status) {
          console.log("Naver login success:", window.naver.user);
          // 네이버 로그인 성공 시 처리할 로직 추가
          navigate("/");
        } else {
          console.error("Naver login failed");
          // 네이버 로그인 실패 시 처리할 로직 추가
        }
      });
    }
  }, [navigate]);

  return <div></div>;
};

export default Callback;
