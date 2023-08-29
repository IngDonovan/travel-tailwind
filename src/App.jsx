import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import AuxBar from './components/AuxBar'
import './App.css'

function App() {

  // useEffect(() => {
  //   const toggleButton = document.getElementById("darkButtonDesktop"); // Select the element after rendering
  //   const toggleButtonSm = document.getElementById("darkButton");
  //   const htmlElement = document.querySelector("html");

  //     toggleButton.addEventListener("click", () => { // Add click event parameter
  //       htmlElement.classList.toggle('dark');
  //     });
  //     toggleButtonSm.addEventListener("click", () => { // Add click event parameter
  //       htmlElement.classList.toggle('dark');
  //     });

  //   }, []); 


  return (
    <>
      <Header />
      <Main />
      <Footer />
      <AuxBar />
    </>
  )
}

export default App
