import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
      <div>
        <h2>About this project</h2>
        <p>
          This project is a playground to showcase skills in React by
          building an application that consumes the API data of BrewDog
          brewery and displays it on the page.
        </p>
        <p>
          The principal developer on this project is <a href="http://www.ben-williams.co.uk/">Ben Williams</a>, 
					a front end web developer based in Leigh on Sea that works in London.
        </p>
      </div>
    );
	}
};

export default About;
