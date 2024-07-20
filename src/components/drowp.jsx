import React from 'react';

function DropDownactive({ onChange }) {
  return (
    <select onChange={onChange}>
      <option value="All">All</option>
      <option value="Active">Active</option>
      <option value="Inactive">Inactive</option>
    </select>
  );
}

export default DropDownactive;