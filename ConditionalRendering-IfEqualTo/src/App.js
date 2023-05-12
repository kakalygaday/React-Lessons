import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name={<i>John</i>} age={22} />
      <Welcome name={<i>User1</i>} age={66} />
    </div>
  );
}

export default App;
