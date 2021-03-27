import React from 'react';
import ShopMart from './ShopMart';
import ItemDetails from './ItemDetails';
import Cart from './Cart';
import NavBar from './NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ShopMart/>
          </Route>
          <Route exact path='/item/:id'>
            <ItemDetails />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
