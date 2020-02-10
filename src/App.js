import React from 'react';
import Navigation from './components/layout/Navigation/Navigation';
import { Shopping } from './pages/Shopping/Shopping';
// import { ItemView } from './pages/ItemView/ItemView';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navigation />
       <Container>
        {/* <ItemView /> */}
        <Shopping />
       </Container>
    </div>
  );
}

export default App;
