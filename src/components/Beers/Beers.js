import React from 'react';
import { Link } from "react-router-dom";

import styles from './Beers.module.css';

const Beers = ({ beers }) => {
  return (
    <div className={styles.wrapper}>
      {beers.map(beer => (
        <article key={beer.id} className={styles.beer}>
          <img className={styles.img} src={beer.image_url} alt={beer.name} />
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.description}</p>
          <Link className={styles.link} to={`${beer.id}`}>
            View more
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Beers;
