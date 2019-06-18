import React, { Component } from 'react';
import Beers from '../Beers/Beers';

import styles from "./Home.module.css";

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
			<main className={styles.main}>
				<Beers beers={this.state.beers} />
			</main>
		)
	}
};

export default Home;
