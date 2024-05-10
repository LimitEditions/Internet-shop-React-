import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Index from './components';
import Catalog from './components/Catalog';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index/>}></Route>
          <Route path='/catalog' element={<Catalog/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
