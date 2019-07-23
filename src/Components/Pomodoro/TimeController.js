import React, { Fragment } from 'react';

const TimeController = ({ seconds, minutes, addMin, addSec, subMin, subSec }) => {
    return(
        <Fragment>
            {minutes}
            <button onClick={addMin}>+</button>
            <button onClick={subMin}>-</button>
            {seconds}
            <button onClick={addSec}>+</button>
            <button onClick={subSec}>-</button>}
        </Fragment>
    )
}

export default TimeController;