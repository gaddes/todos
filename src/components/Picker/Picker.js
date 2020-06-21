import React from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../../redux/actions';

const Picker = props => {
  const handleSelect = e => {
    props.setFilter({
      value: e.target.value,
    });
  };

  return (
    <select name="categories" onChange={handleSelect}>
      <option value="">--Choose a category--</option>
      <option value="home">Home</option>
      <option value="work">Work</option>
    </select>
  );
};

export default connect(null, { setFilter })(Picker);