import React from 'react';
import TaskList from './Components/Todo/TaskList';
import Pomodoro from './Components/Pomodoro/Pomodoro';

class App extends React.Component {

  render() {
    return(
      <div>
        <TaskList />
        <Pomodoro />
      </div>
    )
  }
}

export default App;
