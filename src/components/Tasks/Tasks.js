import React, { useState } from 'react';

const Task = props => {
  const [task, setTask] = useState(props.task);
  const { name, checked, category } = task;

  const handleChecked = e => {
    setTask({...task, checked: e.target.checked });
  };

  return (
    <div>
      {/* Checkbox & Name */}
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={handleChecked}
      />
      <label htmlFor={name}>{name}</label>

      {/* Category */}
      <span> - {category}</span>
    </div>
  );
};

const Tasks = props => {
  const { tasks } = props;
  return tasks.map(task => {
    // Only return if category is visible
    return props.categories.visible.includes(task.category) && (
      <Task key={task.name} task={task} />
    );
  });
};

export default Tasks;