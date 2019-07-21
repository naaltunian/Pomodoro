import React from 'react';

const TodoForm = props => {
    return(
        <form onSubmit={props.handleSubmit}>
            { !props.state.task && <input type="text" value={props.state.taskInput} name="taskInput" placeholder="Enter task here" onChange={props.handleChange} /> }
        </form>
    )
}

export default TodoForm;