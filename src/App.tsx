import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product/product";
import Basket from "./components/Basket/basket";
import Favorite from "./components/Favorite/favorite";

function App() {
  return (
    <div className="App">
     <Header/>
        <Routes>
            <Route path={"/"} element={<Product/>}/>
            <Route path={"/basket"} element={<Basket/>}/>
            <Route path={"/favorite"} element={<Favorite/>}/>
        </Routes>
    </div>
  );
}

export default App;
