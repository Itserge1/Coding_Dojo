import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';
import SoloProduct from './components/SoloProduct';
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Form/>
        <ProductList/>
        </Route>

        <Route exact path="/product/:_id">
        <SoloProduct/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
