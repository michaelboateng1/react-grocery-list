import React from "react";

import SingleItem from "./SingleItem";

function ListItems({ list, hundleCheck, hundleRemoveItem }) {
  return (
    <ul>
      {list.map((item) => {
        return <SingleItem item={item} key={item.id} hundleCheck={hundleCheck} hundleRemoveItem={hundleRemoveItem} />;
      })}
    </ul>
  );
}

export default ListItems;
