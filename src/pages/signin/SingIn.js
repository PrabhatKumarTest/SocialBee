

const SignIn = () => {
    return (
        <div className='loginPage' >
            <div className="loginContainer">
                <div className="loginConatainerLeft">
                    <p className='leftLogo'>SocailBee</p>
                    <p className='leftLogoMessage'>Create An Account</p>
                </div>
                <div className="loginContainerRight">
                    <div className="loginCard">
                        <input type="text" placeholder='Username' className='loginInput' />
                        <input type="email" placeholder='Email or Phone Number' className='loginInput' />
                        <input type="password" placeholder='Password' className='loginInput' />
                        <input type="password" placeholder=" Password Again" className='loginInput' />
                        <button style={{marginBottom:"1rem"}} className='loginBtn'> Create Account</button>
                        <hr className='loginHr' />
                        <button className='loginBtnCreateUser'> Login to Account</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn