import React, { useState } from 'react';

const AddTask = props => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = e => {
    // Prevent page refresh
    e.preventDefault();

    // Construct new task object
    const task = {
      name,
      checked: false, // Default when new task added
      category,
    };

    // Add new task object to existing array
    props.setTasks([...props.tasks, task]);

    // Reset state (clear input fields)
    setName('');
    setCategory('');
  };

  return (
    <form>
      <button onClick={handleSubmit}>+</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name..."
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="enter category..."
        required
      />
    </form>
  );
};

export default AddTask;