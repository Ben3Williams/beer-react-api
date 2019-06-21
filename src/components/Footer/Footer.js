import React, { Component } from 'react';

import styles from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p>Made by <a className={styles.link} href="http://www.ben-williams.co.uk/" target="_blank" rel="noopener noreferrer">Ben Williams</a> and powered by the <a className={styles.link} href="https://punkapi.com/" target="_blank" rel="noopener noreferrer">Punk API</a></p>
      </footer>
    );
  }
}

export default Footer;
