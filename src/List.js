import React from "react";
import itemData from "./Data";
import Tasks from "./Tasks";

const ItemList = () => {
  const items = itemData;
  return (
    <div>
      <ul>
        {items.map((i) => (
          <Tasks itemObj={i} key={itemData.text} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
