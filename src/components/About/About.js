import React, { Component } from 'react';

import styles from './About.module.css';

class About extends Component {
	render() {
		return (
      <main className={styles.about}>
        <h2>About this project</h2>
        <h3>Why build this site?</h3>
        <p>
          This project is a playground to showcase skills in React by
          building an application that consumes the API data of BrewDog
          brewery and displays it on the page.
        </p>
        <h3>Tech stack</h3>
        <ul>
          <li>CSS Modules</li>
          <li>Jest for running tests</li>
          <li>Data from Punk API</li>
          <li>Created using the Create React App</li>
        </ul>
        <h3>Who built it?</h3>
        <p>
          The developer on this project is <a href="http://www.ben-williams.co.uk/">Ben Williams</a>, a front
          end web developer based in Leigh on Sea that works in London.
        </p>
      </main>
    );
	}
};

export default About;
