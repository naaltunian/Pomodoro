import React from 'react';

const Timer = ({ minutes, seconds }) => {
    return(
        <div>
            <h1>{minutes}:{seconds < 10 && 0}{seconds}</h1>
        </div>
    )
}

export default Timer;