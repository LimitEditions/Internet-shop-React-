import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/HomePage';
import About from './components/AboutPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
