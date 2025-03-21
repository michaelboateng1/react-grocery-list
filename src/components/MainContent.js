import React from "react";

// css
import "../styles/main.css";

import ListItems from "./ListItems";

function MainContent({ list, hundleCheck, hundleRemoveItem }) {
  const emptyItemStyle = { margin: "25% auto" };
  return <>{list.length ? <ListItems list={list} hundleCheck={hundleCheck} hundleRemoveItem={hundleRemoveItem} /> : <p style={emptyItemStyle}>There's no list item</p>}</>;
}

export default MainContent;
