import './App.css';
import Counter from './components/Counter';
import Greatting from './components/Greatting';
import State from './components/MessageList';
import TextDisplay from './components/TextDisplayForm';

function App() {
  const states = [
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
];
  return (
    <div className="App">
      {/* <Greatting nameUser={'Alex'} /> */}
      <Counter />
      {/* <State states={states}/> */}
      <TextDisplay/>
    </div>
  );
}

export default App;
