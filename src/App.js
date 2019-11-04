import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./View/Login";
import Product from "./View/Product";
import Candidates from "./View/Candidates";
import Contact from "./View/Contact";
import AboutMe from "./View/AboutMe";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function App() {
  return (
    <Switch>

      <Route path="/" exact component={Login}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/product" exact component={Product}></Route>
      <Route path="/candidates/:id/:edit" exact component={Candidates}></Route>
      <Route path="/contact" exact component={Contact}></Route>
      <Route path="/aboutMe" exact component={AboutMe}></Route>
    </Switch>
    
  );
}

export default App;
