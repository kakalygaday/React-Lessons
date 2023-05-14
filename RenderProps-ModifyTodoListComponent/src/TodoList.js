import React, { useState } from 'react';

export default function TodoList(props) {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    const handleAddItem = () => {
        setItems([...items, newItem]);
        setNewItem('');
    };

    const handleReset = () => {
        setItems([]);
    };

    const handleRemoveItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };
  return (
    <div>
        {props.render(items, handleRemoveItem)}
        {/* <ul>
            {items.map((item, index) => (
                <li key={index}>{item} <button onClick={() => handleRemoveItem(index)}>Remove this item</button> </li>
            ))}
        </ul> */}
        <input type='text' placeholder='Enter new item here' value={newItem}
        onChange={(event) => setNewItem(event.target.value)}></input>
        <button onClick={handleAddItem}>Add Item</button> <br />
        <button onClick={handleReset}>Reset all Item list</button>
    </div>
  );
}

