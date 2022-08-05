import { useRef } from "react";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email.current.value);
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Pesbug</h3>
          <span className="loginDesc">
            connect with friend's bug and the world of bugs
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input
              type="email"
              ref={email}
              required
              className="loginInput"
              placeholder="type your email"
            />
            <input
              type="password"
              ref={password}
              required
              minLength="6"
              className="loginInput"
              placeholder="type your password"
            />
            <div className="buttonWrapper">
              <button className="loginButton">Log in</button>
              <span className="loginForgot">forgot password</span>
              <button className="loginRegisterButton">
                create a new account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
