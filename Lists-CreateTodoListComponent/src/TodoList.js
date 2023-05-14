import React, { useState } from 'react';

export default function TodoList() {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        setItems([...items, newItem]);
        setNewItem('');
    };
  return (
    <div>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <input type='text' placeholder='Enter new item here' value={newItem}
        onChange={(event) => setNewItem(event.target.value)}></input>
        <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}
