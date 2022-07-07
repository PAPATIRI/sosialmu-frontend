import './login.css'

export default function Login() {
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
                    <div className="loginBox">
                        <input type="email" className="loginInput" placeholder="type your email" />
                        <input type="password" className="loginInput" placeholder="type your password" />
                        <div className="buttonWrapper">
                            <button className="loginButton">Log in</button>
                            <span className="loginForgot">forgot password</span>
                            <button className="loginRegisterButton">create a new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
