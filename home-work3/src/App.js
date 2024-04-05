import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import ToDoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TemperatureConverter/>
      <ToDoList />
    </div>
  );
}

export default App;
