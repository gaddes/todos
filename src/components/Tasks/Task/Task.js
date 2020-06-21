import React from 'react';
import { connect } from 'react-redux';

import { setChecked } from '../../../redux/actions';

const Task = props => {
  const { name, checked, category } = props.task;

  const handleChecked = e => {
    props.setChecked({
      name,
      checked: e.target.checked,
    });
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

export default connect(null, { setChecked })(Task);