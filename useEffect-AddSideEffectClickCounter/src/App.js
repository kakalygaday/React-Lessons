import { useState } from 'react';
import './App.css';
import ClickCounter from './ClickCounter';

function App() {
  const [counterValue, setCounterValue] = useState(0);

  const handleCountChange = (counter) => {
    setCounterValue(counter);
  }
  return (
    <div>
      <h1>Click Counter</h1>
      <ClickCounter onCounterChange={handleCountChange} />
      <p>Current count value = {counterValue}</p>
    </div>
  );
}

export default App;

