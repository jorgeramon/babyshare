import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/login" exact component={ Login } />
            <Route path="/register" exact component={ Register } />
            <Route path="/new" exact component={ NewProduct } />
          </Switch>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
