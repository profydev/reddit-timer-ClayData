import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Searchpage from './Pages/Searchpage/Searchpage';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={Searchpage} />
      </div>
    </Router>
  );
}

export default App;
