import { useState, useEffect } from 'react';
import { TravelProvider } from "./Context";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AuxBar from './components/AuxBar';
import './App.css';

function App() {
  return (
    <>
      <TravelProvider>
        <Header />
        <Main />
        <Footer />
        <AuxBar />
      </TravelProvider> 
    </>
  )
}

export default App
