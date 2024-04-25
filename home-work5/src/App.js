import './App.css';
import { createContext, useState, React } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Load from './components/Load';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const UserContext = createContext('Гость')
export const ThemeContext = createContext('light')

const withLoadingIndicator = (Component, isLoad) => {
  return (props) => {
    const newProps = {
      ...props,
      isLoad,
    };
    return <Component {...newProps} />
  };
};

function App() {
  const [userName, setUserName] = useState('Гость');
  const [userTheme, setUserTheme] = useState('light');
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const NewLoading = withLoadingIndicator(Load, isLoading);

  setTimeout(() => {
    setIsLoading((prev) => !prev)
  }, 3000);
 
  function changeName(e) {
    e.preventDefault();
    setUserName(inputValue);
    setInputValue('');
  }

  function changeTheme() {
    setUserTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="App">
      <NewLoading>
      <ThemeContext.Provider value={userTheme}>
        <UserContext.Provider value={userName}>
          <Header />
          <input type='text' label="Введите имя" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button onClick={changeName}>Сменить имя</button>
          <Profile />
          <button onClick={changeTheme}>Сменить тему</button>
          <Footer />
        </UserContext.Provider>
      </ThemeContext.Provider>
      </NewLoading>
      <>
        <Provider store={store}>
          <Counter />
        </Provider>
      </>
    </div>

  );
}

export default App;
