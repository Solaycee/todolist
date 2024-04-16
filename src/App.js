import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Itemlist from "./Itemlist";
// import ItemList from "./List";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Milk",
      quantity: 5,
      checked: false,
    },
    {
      id: 2,
      name: "Coffee",
      quantity: 4,
      checked: false,
    },
    {
      id: 3,
      name: "Sugar",
      quantity: 3,
      checked: false,
    },
  ]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "name")
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));

  if (sortBy === "checked")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.checked) - Number(b.checked));

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const checkItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to clear?");
    if (confirmed) {
      setItems([]);
    }
  }

  // function handleDeleteItem(id) {
  //   setItems((items) => items.filter((item) => item.id !== id));
  // }

  // function handleCheckeditems(id) {
  //   setItems((items) =>
  //     items.map((item) => item.id === id)
  //       ? { ...items, checked: !items.checked }
  //       : items
  //   );
  // }

  return (
    <div>
      <Header />
      <Form onAddItem={handleAddItems} />
      <Itemlist items={sortedItems} onDelete={deleteItem} onCheck={checkItem} />
      <br />
      <div>
        <button className="clear" onClick={handleClearList}>
          Clear
        </button>
      </div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by Input</option>
        <option value="name">Sort by name</option>
        <option value="checked">Sort by check status</option>
      </select>
      <Footer items={items} />
    </div>
  );
}

export default App;
