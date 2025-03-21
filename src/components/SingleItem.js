import React from "react";

import "../styles/listItem.css";

function SingleItem({ item, hundleCheck, hundleRemoveItem }) {
  const { id, title, checked } = item;
  // console.log(id);
  return (
    <li onDoubleClick={() => hundleCheck(id)}>
      <div>
        <input type="checkbox" checked={checked} onChange={() => hundleCheck(id)} />
        <p style={checked ? { textDecoration: "line-through" } : null}>{title}</p>
      </div>
      <button type="button" onClick={() => hundleRemoveItem(id)}>
        remove
      </button>
    </li>
  );
}

export default SingleItem;
