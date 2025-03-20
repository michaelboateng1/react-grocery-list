import React from "react";

// css
import "../styles/main.css";

import ListItems from "./ListItems";

function MainContent({ list, hundleCheck, hundleRemoveItem }) {
  return <main>{list.length ? <ListItems list={list} hundleCheck={hundleCheck} hundleRemoveItem={hundleRemoveItem} /> : <p style={{ marginTop: "25%" }}>There's no list item</p>}</main>;
}

export default MainContent;
