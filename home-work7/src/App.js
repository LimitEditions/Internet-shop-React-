import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index';
import TaskList from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;

