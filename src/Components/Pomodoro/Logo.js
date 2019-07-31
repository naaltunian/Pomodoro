import React from 'react';
import Pomodoro from './assets/pomodoro.png';
import './Pomodoro.css';

const Logo = () => {
    return(
        <div className="logo">
            <img src={Pomodoro} alt="tomato" height="250px" />
        </div>
    )
}

export default Logo;