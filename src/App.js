import React from 'react';
import Navigation from './components/layout/Navigation/Navigation';
// import { Shopping } from './pages/Shopping/Shopping';
import { ItemView } from './pages/ItemView/ItemView';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/* <Shopping />
       */}
       <Container>
        <ItemView />
       </Container>
    </div>
  );
}

export default App;
