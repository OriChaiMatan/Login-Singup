import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

export function Signup() {

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
            <div className="inputs">
                <div className="input">
                    <img src={password_icon} alt="confirm password" />
                    <input type="password" placeholder='Confirm Password' />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
            </div>
            <div className="navigate">Have an acount? <Link to={'/login'} className='link'> Click Here to Login!</Link></div>
        </div>
    )
}
