import React, { Component } from "react";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navigation from './components/Navigation/Navigation';
import BeerDetails from './components/BeerDetails/BeerDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/:id" component={BeerDetails} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
