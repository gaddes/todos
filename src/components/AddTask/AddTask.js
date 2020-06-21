import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTask } from '../../redux/actions';

const AddTask = props => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = e => {
    // Prevent page refresh
    e.preventDefault();

    // Dispatch action which will add new task object to existing array
    props.addTask({
      name,
      category,
    });

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

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { addTask })(AddTask);