// // src/Login.js
// import React, { useEffect } from "react";

// const loadNaverSDK = () => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
//     script.type = "text/javascript";
//     script.onload = resolve;
//     script.onerror = reject;
//     document.head.appendChild(script);
//   });
// };

// const initializeNaverLogin = () => {
//   if (!window.naver) {
//     console.error("Naver SDK not loaded");
//     return;
//   }

//   const naverLogin = new window.naver.LoginWithNaverId({
//     clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
//     callbackUrl: "http://localhost:3000/callback",
//     isPopup: false, // 팝업을 통한 로그인을 사용할 경우 true
//     loginButton: { color: "green", type: 3, height: 48 }, // 로그인 버튼 스타일
//   });
//   naverLogin.init();
//   return naverLogin && naverLogin;
// };

// const NaverLoginPage = () => {
//   useEffect(() => {
//     // 네이버 로그인 초기화
//     loadNaverSDK().then(initializeNaverLogin).catch(console.error);
//   }, []);

//   return (
//     <div>
//       <h1>Naver Login</h1>
//       <div id="naverIdLogin" />
//       {initializeNaverLogin?.user}
//     </div>
//   );
// };

// export default NaverLoginPage;

// src/Login.js
import React, { useEffect, useState } from "react";

const NaverLoginPage = () => {
  const [user, setUser] = useState(null);

  const { naver } = window;
  const naverLogin = new naver.LoginWithNaverId({
    clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
    callbackUrl: "http://localhost:3000",
    isPopup: true,
    loginButton: {
      color: "green",
      type: 3,
      height: 50,
    },
  });

  const getUser = async () => {
    await naverLogin.getLoginStatus(status => {
      console.log(`로그인?: ${status}`);
      if (status) {
        setUser({ ...naverLogin.user });
        // window.opener.location.href = "http://localhost:3000";
        window.close();
      }
    });
  };

  const naverLogout = () => {
    localStorage?.removeItem("com.naver.nid.access_token");
  };

  useEffect(() => {
    naverLogin.init();
    console.log("init!");
    getUser();
  }, []);

  return (
    <div>
      <h1>Naver Login</h1>
      <div id="naverIdLogin" />
      {user?.name && (
        <>
          <h3>사용자 이름</h3>
          <div>{user?.name}</div>
          <button onClick={() => naverLogout()}>로그아웃</button>
        </>
      )}
    </div>
  );
};

export default NaverLoginPage;
