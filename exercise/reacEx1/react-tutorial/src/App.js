import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Components/header';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <hr />
      <Banner />
      <hr />
      <About />
      <hr />
    </div>
  );
}

export default App;