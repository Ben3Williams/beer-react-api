import React from "react";

const Beers = ({ beers }) => {
  return (
    <div>
      <center>
        <h1>Brewdog's beers produced after November 2015.</h1>
      </center>
      {beers.map(beer => (
        <div class="card">
          <div class="card-body">
            <h4>{beer.id}</h4>
            <h5 class="card-title">{beer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{beer.tagline}</h6>
            <p class="card-text">{beer.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beers;
