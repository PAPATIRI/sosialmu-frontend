import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../utils/apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

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
              <button className="loginButton" disabled={isFetching}>
                {isFetching ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Log in"
                )}
              </button>
              <span className="loginForgot">forgot password</span>
              <Link to="/register" className="registerButton">
                <p>create a new account</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
