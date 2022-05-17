import React from "react";

function CategoryFilter({ categories }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((c) => (
        <button name={c}> {c}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
