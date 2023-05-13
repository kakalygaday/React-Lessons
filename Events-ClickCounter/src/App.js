import './App.css';
import ClickCounter from './ClickCounter';


function App() {
  return (
    <div className="App">
      <ClickCounter initialValue = {0} incrementAmount = {1} />
    </div>
  );
}

export default App;
