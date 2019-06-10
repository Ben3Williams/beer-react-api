import React, { Component } from "react";
import Beers from './components/beers/beers';

class App extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?brewed_after=11-2015")
      .then(res => res.json())
      .then(data => {
        this.setState({ beers: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <Beers beers={this.state.beers} />
    );
  }
}

export default App;
