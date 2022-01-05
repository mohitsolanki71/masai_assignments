import logo from './logo.svg';
import './App.css';
import {Home} from "./components/home";
import {Route, Routes} from "react-router-dom";
import { Navbar } from './components/navbar';
import {Product} from './components/product';
import { ProductItem } from './components/productItem';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Product/>}></Route>
        <Route path="/products/:id" element={<ProductItem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
