import './register.css'

export default function Register() {
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
                        <input type="text" className="loginInput" placeholder="type your username" />
                        <input type="email" className="loginInput" placeholder="type your email" />
                        <input type="password" className="loginInput" placeholder="type your password" />
                        <input type="password" className="loginInput" placeholder="type your password again" />
                        <div className="buttonWrapper">
                            <button className="loginButton">Sign Up</button>
                            <button className="loginRegisterButton">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
