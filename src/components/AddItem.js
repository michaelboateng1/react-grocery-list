import React from "react";

import "../styles/addItem.css";

function AddItem({ hundleSubmit, newItem, setNewItem }) {
  return (
    <form onSubmit={hundleSubmit}>
      <input type="text" placeholder="Enter a something..." value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItem;
