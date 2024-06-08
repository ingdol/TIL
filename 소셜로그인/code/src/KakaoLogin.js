import React, { useEffect } from "react";

const KakaoLogin = () => {
  useEffect(() => {
    // 카카오 JavaScript SDK 초기화
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
      console.log("Kakao SDK initialized:", window.Kakao.isInitialized()); // SDK 초기화 확인
    } else {
      console.log("Kakao SDK already initialized");
    }
  }, []);

  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: authObj => {
        console.log(authObj);
        // 로그인 성공 시 처리할 로직 추가
      },
      fail: err => {
        console.error(err);
        // 로그인 실패 시 처리할 로직 추가
      },
    });
  };

  return (
    <div>
      <h1>Kakao Login</h1>
      <button onClick={loginWithKakao}>Login with Kakao</button>
    </div>
  );
};

export default KakaoLogin;
