import React from 'react';
import Navigation from './components/layout/Navigation/Navigation';
import { Shopping } from './pages/Shopping/Shopping';
import { ItemView } from './pages/ItemView/ItemView';
import { Container } from 'reactstrap';
import { CreateItem } from './pages/CreateItem/CreateItem';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
            <Route exact path="/" component={Shopping} />
          </Switch>
          </Container>
        </Router>
    </div>
  );
}

export default App;
 