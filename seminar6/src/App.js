import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import CounterComponent from './components/CounterComponent';
import ButtonComponent from './components/ButtonComponent';
import ButtonComponentMinus from './components/ButtonComponentMinus';
import { FilterContext } from './contexts/FilterContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}>
        <>
          <CounterComponent/>
          <ButtonComponent/>
          <ButtonComponentMinus/>
        </>
      </Provider> */}

          <FilterContext.Provider>
            <AddTodo/>
            <TodoList/>
            <TodoFilter/>
          </FilterContext.Provider>

    </div>
  );
}

export default App;
