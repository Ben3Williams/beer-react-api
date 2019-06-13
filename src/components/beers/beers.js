import React from 'react';
import { Link } from "react-router-dom";

import styles from './Beers.module.css';

const Beers = ({ beers }) => {
  return (
    <div>
      <center>
        <h1>Brewdog's beers produced after November 2015.</h1>
      </center>
      {beers.map(beer => (
        <article key={beer.id} className={styles.beer}>
          <h2>{beer.id}</h2>
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.description}</p>
          <Link className={styles.link} to={`${beer.id}`}>View more</Link>
        </article>
      ))}
    </div>
  );
};

export default Beers;
