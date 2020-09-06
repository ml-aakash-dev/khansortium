import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

import Main from './components/main/main'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
