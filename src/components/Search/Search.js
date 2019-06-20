import React, { Component } from 'react';
import Beers from '../Beers/Beers';

import styles from "./Search.module.css";

class Search extends Component {

	// state = {
	// 	beers: []
	// };

	// componentDidMount() {
	// 	fetch("https://api.punkapi.com/v2/beers?brewed_after=11-2015")
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		this.setState({ beers: data });
	// 	})
	// 	.catch(console.log);
	// }
	render() {
		return (
			<input type="text" name="search"></input>
			<label for="search">Search here</label>
		)
	}
};

export default Search;
