import React, { useState } from 'react';
import './App.css';

import { data } from './data';
import { AddTask, Header, Picker, Tasks } from './components';

const App = () => {
  const [tasks, setTasks] = useState(data.tasks);
  const [categories, setCategories] = useState(data.categories);

  return (
    <div className="App">
      <div className="tasks">
        <Header />
        <Tasks tasks={tasks} categories={categories} />
        <AddTask tasks={tasks} setTasks={setTasks} />
      </div>
      <Picker categories={categories} setCategories={setCategories} />
    </div>
  );
}

export default App;
