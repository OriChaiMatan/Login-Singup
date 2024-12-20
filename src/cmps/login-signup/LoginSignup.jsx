import React from 'react'
import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

export function LoginSignup() {
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
                    <input type="password" placeholder='Password' />
                </div>
            </div>
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}
