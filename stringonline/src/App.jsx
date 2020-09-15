import React from 'react';
import './App.scss';
import Header from './compontens/header/header';
import Footer from './compontens/footer/footer';
import Kurv from './compontens/contexts/avv';

function App() {
  return (
    <div className="App">
      <Kurv>
      <Header/>
      </Kurv>
      <Footer/>

    </div>
  );
}

export default App;
