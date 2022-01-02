import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          MoreThanTech
        </p>
        <a
          class={styles.link}
          href="https://morethantech.it"
          target="_blank"
          rel="noopener noreferrer"
        >Back to MTT</a>
      </header>
    </div>
  );
};

export default App;
