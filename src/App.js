import React from 'react'
import './App.css';
import Home from './pages/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
              <h1>Searchpage</h1>
            </Route>
            <Route path="/">
                <Home />          
              </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
