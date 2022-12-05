import "../css/Login.css";

export const Login = () => {
  return (
    <>
      <div className="temp-box">
        <div>
          <input className="loginInfo" type="textarea" placeholder="ID"></input>
        </div>
        <div>
          <input
            className="loginInfo"
            type="textarea"
            placeholder="Password"
          ></input>
        </div>
        <button className="signupBtn">회원가입</button>
        <button className="loginBtn">로그인</button>
      </div>
    </>
  );
};
