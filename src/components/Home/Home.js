import React, { Component } from 'react';

import Beers from '../Beers/Beers';

class Home extends Component {

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
			<div>
				<p>Home</p>
				<Beers beers={this.state.beers} />
			</div>
		)
	}
};

export default Home;