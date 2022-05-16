
import './App.css';
import Header from './Components/Header';
import HeaderData from './Components/HeaderData';
import Meme from './Components/Meme';

function App() {
  const HeaderElement = HeaderData.map(item =>{
    return <Header
    key ={item.id}
    item={item}
    />
  })
  
  return (
    <div className="App">
      {HeaderElement}
      <Meme/>
      
    </div>
  );
}

export default App;
