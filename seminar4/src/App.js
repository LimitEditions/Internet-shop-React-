import './App.css';
import Box from './components/Box';
import RenderList from './components/RenderList';
import List from './components/List';
import ListPage from './components/ListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';

function App() {
  const liElements = [1, 2, 3, 4, 5, 6, 7, 8];
  const renderItem = (item, index) => {
    const style = {color: index % 2 === 0 ? 'blue' : 'green'};
    return (
      <div style={style}>
        {item} - Уникальный стиль
      </div>
    )  
  }

  const productList = [
    {id: 1, productName: 'мясо', img:'https://free-png.ru/wp-content/uploads/2022/06/free-png.ru-419.png'},
    {id: 2, productName: 'рыба', img:'https://i.artfile.ru/4900x3262_225351_[www.ArtFile.ru].jpg'},
    {id: 3, productName: 'овощи', img:'https://womanjour.ru/wp-content/uploads/2020/08/15049-produkciya-syroedenie-keytering-naturalnye_produkty-pishha-1920x1200-1.jpg'},
    {id: 4, productName: 'фрукты', img:'https://mrfilin.com/wp-content/uploads/c/0/3/c03de6aa5d42378235de5a112feca136.jpg'},
    {id: 5, productName: 'специи', img:'https://iv.selhozproduct.ru/upload/usl/f_610eef2158415.jpg'},
    {id: 6, productName: 'вода', img:'https://avatars.mds.yandex.net/get-altay/920214/2a000001623d2562be23c3aab33c88ecf9be/XXL_height'},
]
  
  return (
    <div className="App">
      <Box>
        <p>Hello World</p>
      </Box>
      <Box>
        <p>Material UI</p>
      </Box>
      <Box>
        <img src="https://avatars.mds.yandex.net/i?id=cb63ab679183c3983501de763b5a5036769849f3-8377431-images-thumbs&n=13" alt="камни"/>
      </Box>
      <List>
        <li style = {{color: 'red', backgroundColor: 'blue'}}>Красный</li>
        <li style = {{color: 'yellow', backgroundColor: 'black'}}>Желтый</li>
        <li style = {{color: 'green'}}>Зеленый</li>
      </List>
      <RenderList listItems={liElements} renderItem={renderItem} />
      <Router>
        <Routes>
          <Route path='/product/:id' element={<DetailsPage productList={productList}/>}/>
          <Route path='*' element={<ListPage productList={productList} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
