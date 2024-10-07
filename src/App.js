/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//test comment from Yash
export default App;
*/

import React, { useState } from 'react';
import ScheduleInput from './ScheduleInput';
import ScheduleDisplay from './ScheduleDisplay';

function App() {
  const [schedule, setSchedule] = useState({});

  return (
    <div>
      <ScheduleInput setSchedule={setSchedule} />
      {schedule && <ScheduleDisplay schedule={schedule} />}
    </div>
  );
}

export default App;