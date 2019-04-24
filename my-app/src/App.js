import React, { Component } from 'react';
import './App.css';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Product judul="Charger HP" harga="Rp 20.000"></Product>
            <Product judul="Flashdisk OTG" harga="Rp 150.0000"></Product>
            <Product judul="Flashdisk" harga="Rp 50.000"></Product>
            <Product judul="Case Hp" harga="Rp 100.000"></Product>
        </header>
      </div>
    );
  }
}

export default App;
