import React from 'react';

const TimeController = ({ addMin, addSec, subMin, subSec, reset, start, startTimer, stopTimer }) => {
    return(
        <div>
            <span className="time-controller-settings">
                <button disabled={start && true} onClick={subMin}>-</button>
                Minutes
                <button disabled={start && true} onClick={addMin}>+</button>
                <button disabled={start && true} onClick={subSec}>-</button>
                Seconds
                <button disabled={start && true} onClick={addSec}>+</button>
            </span>
            <br/>
            <span className="time-controller-buttons">
                { start ? <button onClick={stopTimer}>Pause</button> : <button onClick={startTimer}>Start</button>}
                <button disabled={start && true} onClick={reset}>Reset</button>
            </span>
        </div>
    )
}

export default TimeController;