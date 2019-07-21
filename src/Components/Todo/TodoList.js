import React from 'react';
import TodoForm from './TodoForm';

class TodoList extends React.Component {

    state = {
        taskInput: "",
        subTaskInput: "",
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

      handleSubTaskSubmit = e => {
          e.preventDefault();
          const { subTasks, subTaskInput } = this.state;
          const updatedSubTasks = [...subTasks, subTaskInput]
          this.setState({
              subTasks: updatedSubTasks,
              subTaskInput: ""
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
                <TodoForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleSubTaskSubmit={this.handleSubTaskSubmit} />
                { this.state.task && <h2>Task:</h2>}
                { this.state.task && <p>{this.state.task}</p> }
                { this.state.subTasks && this.state.subTasks.map((subTask, index) => {
                    return <p key={index}>{subTask}</p>
                })}
            </div>
        )
    }
}

export default TodoList;