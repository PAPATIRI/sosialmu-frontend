import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Password doesn't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="text"
              required
              ref={username}
              className="loginInput"
              placeholder="type your username"
            />
            <input
              type="email"
              required
              ref={email}
              className="loginInput"
              placeholder="type your email"
            />
            <input
              type="password"
              required
              ref={password}
              className="loginInput"
              placeholder="type your password"
            />
            <input
              type="password"
              required
              ref={passwordAgain}
              className="loginInput"
              placeholder="type your password again"
            />
            <div className="buttonWrapper">
              <button className="registerButton">Sign Up</button>
              <Link to="/login" className="loginButton">
                <p>Login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
