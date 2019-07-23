import React from 'react';

const Timer = ({ minutes, seconds }) => {
    return(
        <div>
            <h1>{minutes}: {seconds}</h1>
        </div>
    )
}

export default Timer;