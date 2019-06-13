import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./BeerDetails.module.css";

export default function BeerDetails(props) {
  const initialBeerState = {
    beer: {},
    loading: true
  };

  const [beer, setBeer] = useState(initialBeerState);

  useEffect(() => {
    const getBeer = async () => {
      const { data } = await axios(
        `https://api.punkapi.com/v2/beers/${props.match.params.id}`
      );
      console.log(data);
      setBeer(data);
    };

    getBeer();
  }, []);

  return beer.loading ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.details}>
      <img src={beer[0].image_url} alt={beer[0].name} />
      <h2>{props.match.params.id}</h2>
      <p>{beer[0].name}</p>
      <p>{beer.location}</p>
      <p>
        <a href={beer.blog}>{beer.blog}</a>
      </p>
      <p>{beer.followers}</p>
    </div>
  );
}