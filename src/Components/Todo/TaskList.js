import React from 'react';
import TaskForm from './TaskForm';
import SubTask from './SubTask';
import "./Task.css";

class TaskList extends React.Component {

    state = {
        taskInput: "",
        subTaskInput: "",
        task: "",
        subTasks: [],
        taskId: 0,
        disabledInput: false
      }
    
      handleSubmit = e => {
        e.preventDefault();
        if(!this.state.taskInput) return;
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
          if(!this.state.subTaskInput) return;
          const { subTasks, subTaskInput } = this.state;
          const updatedSubTasks = [...subTasks, subTaskInput];
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

    deleteSubTask = taskId => {
       const id = this.state.subTasks.filter((task, taskIndex) => taskIndex !== taskId);
       this.setState({ subTasks: id });
    }

    render() {
        return(
            <div className="task-form">
                { this.state.task && <h2><strong>Task:</strong> {this.state.task}</h2>}
                <TaskForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleSubTaskSubmit={this.handleSubTaskSubmit} />
                { this.state.subTasks && this.state.subTasks.map((subTask, index) => {
                    return <SubTask id={index} key={index} subTask={subTask} delete={this.deleteSubTask} />
                })}
            </div>
        )
    }
}

export default TaskList;