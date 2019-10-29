import React from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import Login from './View/Login'
import Dashboard from './View/Dashboard'
import Candidates from './View/Candidates';

function App() {
  return (
  
    <Switch>

      <Route path="/" exact component={Login}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
      <Route path="/candidates" exact component={Candidates}></Route>

    </Switch>
    // <Route></Route>
    // <Route></Route>
    // <Route></Route>
  );
}

export default App;
