import React from 'react';
import './Pomodoro.css';

const Timer = ({ minutes, seconds }) => {
    return(
        <div className="timer-container">
            <h1>{minutes < 10 && 0}{minutes}:{seconds < 10 && 0}{seconds}</h1>
        </div>
    )
}

export default Timer;