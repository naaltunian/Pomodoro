import React, { Fragment } from 'react';

const TodoForm = props => {
    return(
        <Fragment>
            { !props.state.task &&  <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.state.taskInput} name="taskInput" placeholder="Enter task here" onChange={props.handleChange} />
            </form> }
            
            { props.state.task && <form onSubmit={props.handleSubTaskSubmit}>
                <input type="text" value={props.state.subTaskInput} name="subTaskInput" placeholder="Enter sub task here" onChange={props.handleChange} />
            </form> }
        </Fragment>
    )
}

export default TodoForm;