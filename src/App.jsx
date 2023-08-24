import { useState } from 'react'
import moonLogo from './assets/svg/moon.svg'
import searchLogo from './assets/svg/search.svg'
import './App.css'

function App() {

  return (
    <>
      <header className="w-full h-3/4 bg-gray-400 flex flex-col relative" >
        <nav></nav>
        <div className=" w-full h-full">
          <picture className="w-full h-full bg-red-100 flex flex-row">
            <span className="w-full h-full bg-sanFrancisco bg-cover bg-center bg-no-repeat"></span>
          </picture>
          <div className="absolute top-0 p-6 w-full h-full flex flex-col gap-5 align-center self-center">
            <span className="self-end bg-white px-4 py-2 rounded-3xl">
              <img src={moonLogo} alt="" className="w-5 h-5"/>
            </span>
            <div className="flex align-center justify-center bg-white rounded-3xl shadow-custom">
              <span className="self-center">
                <img src={searchLogo} alt="" className="w-6 h-6"/>
              </span>
              <input 
                type="search" 
                name="" 
                id="" 
                placeholder="San Francisco" 
                className="text-center text-base py-4 px-0 rounded-3xl border-none outline-none bg-transparent focus:bg-transparent"/>
            </div>
            <button className="bg-white self-center mt-72 py-4 px-10 rounded-3xl text-primary font-Montserrat text-base font-bold  shadow-custom">Explore More</button>
          </div>
        </div>
      </header>
      <main>
        <section id="recomendations" className="py-7">
          <h2 className="text-primary font-bold text-2xl px-5 pb-7">Our Recomendations</h2>
          <aside className="w-auto h-52 flex gap-5 overflow-auto px-5 ">
            <article className="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
              <picture className="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="w-40 h-48 min-w-max flex flex-col bg-white text-white rounded-lg shadow-custom">
              <picture className="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
              <picture className="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
              <picture className="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
              <picture className="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
              <picture className="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
              <picture className="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
              <picture className="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
              <picture className="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
          </aside>
        </section>
      </main>
    </>
  )
}

export default App
