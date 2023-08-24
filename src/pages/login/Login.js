import './login.css'

const Login = () => {
    return (
        <div className='loginPage' >
            <div className="loginContainer">
                <div className="loginConatainerLeft">
                    <p className='leftLogo'>SocailBee</p>
                    <p className='leftLogoMessage'>Welcome to Social Bee</p>
                </div>
                <div className="loginContainerRight">
                    <div className="loginCard">
                        <input type="email" placeholder='Email or Phone Number' className='loginInput' />
                        <input type="password" placeholder=" Password" className='loginInput' />
                        <button className='loginBtn'> Login</button>
                        <a className="loginForgotPassLink" href="/">Forgot Password?</a>
                        <hr className='loginHr' />
                        <button className='loginBtnCreateUser'> Create New Account</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login