import React, { Fragment } from 'react';

const TimeController = ({ seconds, minutes, addMin, addSec, subMin, subSec, reset }) => {
    return(
        <Fragment>
            <button onClick={subMin}>-</button>
            {minutes}
            <button onClick={addMin}>+</button>
            <button onClick={subSec}>-</button>
            {seconds}
            <button onClick={addSec}>+</button>
            <br/>
            <button>Start</button>
            <button onClick={reset}>Reset</button>
        </Fragment>
    )
}

export default TimeController;