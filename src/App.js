import React from 'react';
import Navigation from './components/layout/Navigation/Navigation';
import { Shopping } from './pages/Shopping/Shopping';
import { ItemView } from './pages/ItemView/ItemView';
import { Container } from 'reactstrap';
import { CreateItem } from './pages/CreateItem/CreateItem';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from './pages/Cart/Cart';
import { Account } from './pages/Account/Account';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Orders } from './pages/Orders/Orders';

function App() {
  return (
    <div className="App">
        <Router>
        <Navigation />
          {/* <Link to="/create">Create</Link> */}
          <Container>
          <Switch> 
            <Route exact path="/item" component={ItemView} />
            <Route exact path="/create" component={CreateItem} />
            <Route exact path="/create" component={CreateItem} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/" component={Shopping} />
            
          </Switch>
          </Container>
        </Router>
    </div>
  );
}

export default App;
 