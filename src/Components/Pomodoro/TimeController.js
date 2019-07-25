import React, { Fragment } from 'react';

const TimeController = ({ addMin, addSec, subMin, subSec, reset, start, startTimer, stopTimer }) => {
    return(
        <Fragment>
            <button disabled={start && true} onClick={subMin}>-</button>
            Minutes
            <button disabled={start && true} onClick={addMin}>+</button>
            <button disabled={start && true} onClick={subSec}>-</button>
            Seconds
            <button disabled={start && true} onClick={addSec}>+</button>
            <br/>
            { start ? <button onClick={stopTimer}>Pause</button> : <button onClick={startTimer}>Start</button>}
            <button disabled={start && true} onClick={reset}>Reset</button>
        </Fragment>
    )
}

export default TimeController;