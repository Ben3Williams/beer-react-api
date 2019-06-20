import React, { Component } from 'react';
import { Link } from "react-router-dom";

import styles from './Beers.module.css';

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      filtered: []
    };
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?brewed_after=11-2015")
      .then(res => res.json())
      .then(data => {
        this.setState({ beers: data });
      })
      .catch(console.log);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.beers
    });
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.state.beers;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(beer => {
        // change current item to lowercase
        const lc = beer.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.state.beers;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
        </div>
        {this.state.beers.map(beer => (
          <article key={beer.id} className={styles.beer}>
            <img className={styles.img} src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.description}</p>
            <Link className={styles.button} to={`${beer.id}`}>
              View details
            </Link>
          </article>
        ))}
      </div>
    );
  };
};

export default Beers;
