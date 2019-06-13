import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import styles from "./Navigation.module.css";

class Navigation extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>The beers of BrewDog</h1>
        <nav>
          <Link className={styles.link} to="/">
            Home
          </Link>
          <Link className={styles.link} to="/about">
            About
          </Link>
        </nav>
      </header>
    );
  }
}

export default Navigation;
