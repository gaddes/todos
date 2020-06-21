import React from 'react';
import { connect } from 'react-redux';

import { Task } from './Task';

const Tasks = props => (
  props.tasks.map(task => {
    // Only return if category is visible
    return props.categories.visible.includes(task.category) && (
      <Task key={task.name} task={task} />
    );
  })
);

const mapStateToProps = state => ({
  tasks: state.tasks,
  categories: state.categories,
});

export default connect(mapStateToProps)(Tasks);