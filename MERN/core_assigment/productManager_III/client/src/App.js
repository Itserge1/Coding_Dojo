import './App.css';
import Form from './components/Form';
import ProductList from './components/ProductList';
import SoloProduct from './components/SoloProduct';
import EditProduct from './components/EditProduct';
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import axios from 'axios';

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

        <Route exact path="/edit/:_id">
        <EditProduct/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
