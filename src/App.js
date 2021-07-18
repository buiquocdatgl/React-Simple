import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <Fragment>
      <Header />
      <Todos />
    </Fragment>
  );
}

export default App;
