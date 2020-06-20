import React from 'react';

const Picker = props => {
  const { categories, setCategories } = props;

  const handleSelect = (e) => {
    const { value } = e.target;

    if (!value) {
      // Set all categories as visible
      setCategories({ ...categories, visible: categories.all});
      return;
    }

    setCategories({ ...categories, visible: [value]});
  };

  return (
    <select name="categories" onChange={handleSelect}>
      <option value="">--Choose a category--</option>
      <option value="home">Home</option>
      <option value="work">Work</option>
    </select>
  );
};

export default Picker;