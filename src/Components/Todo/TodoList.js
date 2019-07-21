import React from 'react';
import TodoForm from './TodoForm';

class TodoList extends React.Component {

    state = {
        taskInput: "",
        subTasksInput: "",
        task: "",
        subTasks: []
      }
    
      handleSubmit = e => {
        e.preventDefault();
        // const todo = this.state.taskInput;
        console.log("todostate:" + this.state.taskInput);
        this.setState({
            task: this.state.taskInput,
            taskInput: ""
        });
        console.log(this.state);
      }
    
      handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return(
            <div>
                <TodoForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <p>{this.state.task}</p>
            </div>
        )
    }
}

export default TodoList;