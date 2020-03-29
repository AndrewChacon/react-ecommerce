import React, { useEffect } from 'react';
import Navigation from './components/layout/Navigation/Navigation';
import { Shopping } from './pages/Shopping/Shopping';
import { ItemView } from './pages/ItemView/ItemView';
import { Container } from 'reactstrap';
import { CreateItem } from './pages/CreateItem/CreateItem';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import { Account } from './pages/Account/Account';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Orders } from './pages/Orders/Orders';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
