import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import BooksList from './components/booksList';

function App() {
  return (
    <Router>
        <Route component={BooksList} />
    </Router>    
  );
}

export default App;