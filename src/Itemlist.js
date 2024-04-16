import React from "react";
// import itemData from "./Data";

export default function itemList({ items, onDelete, onCheck }) {
  return (
    <div className="items">
      {items.map((item) => (
        <div key={item.id} className="item-list">
          <span className="item-number">{item.quantity}</span>
          <span className={`item-text ${item.checked ? "checked" : ""}`}>
            {item.name}
          </span>
          <button className="trash-button" onClick={() => onDelete(item.id)}>
            🗑️
          </button>
          <button className="check-button" onClick={() => onCheck(item.id)}>
            ✅
          </button>
        </div>
      ))}
    </div>
  );
}

// // import Items from "./Item"
// function Itemlist({ items }) {
//   const item = [
//     {
//       id: 1,
//       text: "Milk",
//       quantity: 5,
//       isChecked: false,
//     },
//     {
//       id: 2,
//       text: "Coffee",
//       quantity: 4,
//       isChecked: false,
//     },
//     {
//       id: 3,
//       text: "Sugar",
//       quantity: 3,
//       isChecked: false,
//     },
//   ];
//   return(
//     <div id="myUnorderedList">
//         <ul className="todolist">
//             {item.map((item)=> (
//                 <Item itemList={item} key={item.name}/>
//             ))}
//         </ul>
//     </div>
//   )
// }
