import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <Welcome name={<i>User</i>} age={22} />
    </div>
  );
}

export default App;
