import React, { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;

    const newItem = { name, quantity, checked: false, id: Date.now() };
    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="text-form">Grocery List</h2>
        <div className="form-container">
          <select
            className="square-dropdown"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {/* <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option> */}
            {Array.from({ length: 20 }, (_, n) => n + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
          <input
            className="input"
            type="text"
            placeholder="Add an Item..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="form-button">Enter</button>
        </div>
      </form>
    </div>
  );
}
