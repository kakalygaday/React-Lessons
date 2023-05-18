import './App.css';
import CarDetails from './CarDetails';

const App = () => {
  const initialData = {
    model: 'Toyota Camry',
    year: '2022',
    color: 'Red'
  };

  return (
    <div>
      <h1>Car Details Form:</h1>
      <CarDetails initialData={initialData} />
    </div>
  );
};

export default App;
