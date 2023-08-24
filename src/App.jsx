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
            <div className="flex align-center justify-center bg-white rounded-3xl shadow-custom transition duration-700 ease-in-out focus:ring-2 focus:w-11/12 hover:scale-105">
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
            <button className="bg-white self-center mt-72 py-4 px-10 rounded-3xl text-primary font-Montserrat text-base font-bold shadow-custom transition duration-500 ease-in-out hover:bg-primary hover:text-white hover:font-bold hover:-translate-y-1 hover:scale-110">Explore More</button>
          </div>
        </div>
      </header>
      <main>
        <section id="recomendations" className="pt-7">
          <h2 className="text-primary font-regular text-2xl px-5">Our Recomendations</h2>
          <aside className="w-auto h-54 flex gap-5 overflow-auto px-5 py-7">
            <article className="h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
              <picture className="w-40 h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="h-48 min-w-max flex flex-col bg-white text-tertiary rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
              <picture className="w-40 h-3/5 bg-norway bg-cover bg-no-repeat rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >New York</h4>
                <p className="text-xs ">Concrete jungle</p>
              </div>
            </article>
            <article className="h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
              <picture className="w-40 h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
              <picture className="w-40 h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
              <picture className="w-40 h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
              <picture className="w-40 h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
              <picture className="w-40 h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
              <picture className="w-40 h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
            <article className="h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom transition duration-500 ease-in-out hover:-translate-y-4 ">
              <picture className="w-40 h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
              <div className="p-3">
                <h4 className="text-sm font-bold pb-1" >Norway</h4>
                <p className="text-xs ">Beautiful landscapes</p>
              </div>
            </article>
          </aside>
        </section>
        <section id="trending" className="px-5">
          <h2 className="text-primary font-regular text-2xl pb-7">Trending Stays</h2>
          <aside className='flex flex-col gap-9  '>
            <article className='flex'>
              <picture className='w-full h-[400px] px-6 py-12 bg-chicago bg-cover bg-center rounded-2xl shadow-custom'>
                <div className='text-white w-52 flex flex-col'>
                <h3 className='text-xl font-bold'>Chicago</h3>
                <p className='text-base py-3'>2 rooms, bathroom and kitchen.</p>
                </div>
              </picture>
            </article>
            <article className='flex'>
              <picture className='w-full h-[400px] px-6 py-12 bg-LA bg-cover bg-center rounded-2xl shadow-custom'>
                <div className='text-white w-52 flex flex-col'>
                <h3 className='text-xl font-bold'>Los Angeles</h3>
                <p className='text-base py-3'>4 rooms, 3 bathrooms, kitchen and private pool.</p>
                </div>
              </picture>
            </article>
            <article className='flex'>
              <picture className='w-full h-[400px] px-6 py-12 bg-miami bg-cover bg-center rounded-2xl shadow-custom'>
                <div className='text-white w-52 flex flex-col'>
                <h3 className='text-xl font-bold'>Miami</h3>
                <p className='text-base py-3'>3 rooms, 2 bathrooms, kitchen and amazing sea view.</p>
                </div>
              </picture>
            </article>
            <article className='flex'>
              <picture className='w-full h-[400px] px-6 py-12 bg-bali bg-cover bg-center rounded-2xl shadow-custom'>
                <div className='text-white w-52 flex flex-col'>
                <h3 className='text-xl font-bold'>Bali</h3>
                <p className='text-base py-3'>2 rooms, 2 bathrooms, kitchen and private pool.</p>
                </div>
              </picture>
            </article>
          </aside>
        </section>
      </main>
    </>
  )
}

export default App
