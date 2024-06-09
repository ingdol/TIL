// src/Login.js
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginPage = () => {
  const handleGoogleLoginSuccess = response => {
    console.log("Google login success:", response);
    console.log(jwtDecode(response.credential));
    // 구글 로그인 성공 시 처리할 로직 추가
  };

  const handleGoogleLoginFailure = error => {
    console.error("Google login failed:", error);
    // 구글 로그인 실패 시 처리할 로직 추가
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div>
        <h1>Google Login</h1>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginPage;
