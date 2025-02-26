import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;
