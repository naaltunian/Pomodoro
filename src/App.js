import React from 'react';
import TaskList from './Components/Todo/TaskList';
// import "./Components/Todo/Task.css";

class App extends React.Component {

  render() {
    return(
      <div>
        <TaskList />
      </div>
    )
  }
}

export default App;
