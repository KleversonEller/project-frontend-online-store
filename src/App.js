import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';
import Products from './components/Products';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
        <Products />
      </BrowserRouter>
    );
  }
}

export default App;
