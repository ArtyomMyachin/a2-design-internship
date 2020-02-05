import React from 'react';
import './App.sass';
import {Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import Home from './components/modules/Home';
import People from "./components/modules/People";
import Feed from "./components/modules/Feed";
import Profile from "./components/modules/Profile";

const history = createBrowserHistory();

function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/people" exact component={People}/>
          <Route path="/people/:id" exact component={Profile}/>
          <Route path="/feed" exact component={Feed}/>
          <Route path="*" exact component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;
