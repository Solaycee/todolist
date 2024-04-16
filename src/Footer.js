import React from "react";

export default function Footer({ items }) {
  let completedItem = items.filter((item) => item.checked).length;
  return (
    <div>
      <p>
        You have {items.length} item in your list, and you already completed{" "}
        {completedItem}
      </p>
    </div>
  );
}
