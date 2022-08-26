import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { Home } from './pages/home';

const App: Component = () => {
  return (
    <div class='bg-slate-100 min-h-screen'>
    <Home />
    </div>
  );
};

export default App;
