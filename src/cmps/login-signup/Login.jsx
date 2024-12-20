import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginSignup.css'

import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import show_icon from '../assets/show.png'
import hide_icon from '../assets/hide.png'

export function Login() {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="email" />
                    <input type="email" placeholder='Email' />
                </div>
            </div>
            <div className="inputs">
            <div className="input">
                    <img src={password_icon} alt="password" />
                    <input type={showPassword ? 'text' : 'password'} placeholder='Password' />
                    <img
                        src={showPassword ? hide_icon : show_icon}
                        alt="toggle visibility"
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                    />
                </div>
            </div>
            <div className="forgot-password">Forgot your password? <span>Click Here !</span></div>
            <div className="submit-container">
                <div className="submit">Login</div>
            </div>
            <div className="navigate">Dont have an acount? <Link to={'/'} className='link'> Click Here to Sign Up!</Link></div>
        </div>
    )
}
