import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import show_icon from '../assets/show.png'
import hide_icon from '../assets/hide.png'

export function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevState) => !prevState);
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="user" />
                    <input type="text" placeholder='Full Name'/>
                </div>
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
            <div className="inputs">
                <div className="input">
                    <img src={password_icon} alt="confirm password" />
                    <input type={showConfirmPassword ? 'text' : 'password'} placeholder='Confirm Password' />
                    <img
                        src={showConfirmPassword ? hide_icon : show_icon}
                        alt="toggle visibility"
                        className="toggle-password"
                        onClick={toggleConfirmPasswordVisibility}
                    />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>
            <div className="navigate">Have an acount? <Link to={'/login'} className='link'> Click Here to Login!</Link></div>
        </div>
    )
}
