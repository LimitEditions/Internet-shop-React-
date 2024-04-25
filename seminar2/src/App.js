import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import MyInputText from './components/TextInput';
import TodoList from './components/TodoList';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <Counter />
      <MyInputText />
      <TodoList />
      <Timer />
    </div>
  );
}

export default App;
