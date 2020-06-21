import React from 'react';
import './App.css';

import { AddTask, Header, Picker, Tasks } from './components';

const App = () => (
  <div className="App">
    <div className="tasks">
      <Header />
      <Tasks />
      <AddTask />
    </div>
    <Picker />
  </div>
);

export default App;
