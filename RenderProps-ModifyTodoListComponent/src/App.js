import './App.css';
import TodoList from './TodoList';


function App() {
  const handleRender = (items, handleRemoveItem) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item} <button onClick={() => handleRemoveItem(index)}>Remove this item</button> </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <TodoList render={handleRender} />
    </div>
  );
}

export default App;
