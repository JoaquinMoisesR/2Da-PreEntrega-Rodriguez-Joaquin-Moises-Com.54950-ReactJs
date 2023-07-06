import './App.css';
import { Library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Paginas/Home";
import QuienesSomos from "./components/Paginas/QuienesSomos";
import Error from "./components/Paginas/Error";
import NavBar from './components/NavBar/Navbar';
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryId" element={<Home/>}/>
          <Route path="QuienesSomos" element={<QuienesSomos/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
