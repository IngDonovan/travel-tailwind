import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header id="home" className="w-full h-3/4 flex flex-col relative" >
        <nav></nav>
        <div className=" w-full h-full">
          <picture className="w-full h-full flex flex-row">
            <span className="w-full h-full bg-sanFrancisco bg-cover bg-center bg-no-repeat lg:hidden"></span>
          </picture>
          <div className="absolute top-0 p-6 w-full h-full flex flex-col gap-5 align-center self-center">
            <span className="self-end bg-white px-4 py-2 rounded-3xl">
              <svg className='w-5 h-5 text-primary' viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z" fill="currentColor"/>
              </svg>
            </span>
            <div className="flex align-center justify-center bg-white rounded-3xl shadow-custom transition duration-700 ease-in-out focus:ring-2 focus:w-11/12 hover:scale-105">
              <span className="self-center">
                <svg className='w-6 h-6 text-primary' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current text-principal" fillRule="evenodd" clipRule="evenodd" d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z" fill="currentColor"/>
                </svg>
              </span>
              <input 
                type="search" 
                name="" 
                id="" 
                placeholder="San Francisco" 
                className="text-center text-base py-4 px-0 rounded-3xl border-none outline-none bg-transparent focus:bg-transparent"/>
            </div>
            <button className="self-center absolute bottom-5 py-4 px-10 rounded-3xl bg-white text-primary font-Montserrat text-base font-bold shadow-custom transition duration-500 ease-in-out hover:bg-primary hover:text-white hover:font-bold hover:-translate-y-1 hover:scale-110">Explore More</button>
          </div>
        </div>
      </header>
      <main>
        <section id="recomendations" className="pt-7">
          <h2 className="text-primary font-regular text-2xl px-5">Our Recomendations</h2>
          <aside className="w-auto h-54 flex gap-5 overflow-auto  px-5 py-7">
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
        <section id="faq" className="flex flex-col px-7 ">
        <h2 className="text-primary font-regular text-2xl py-7">FAQs</h2>
          <aside className='flex flex-col gap-2'>
            <article className=''>
              <h4 className='text-primary text-base font-bold'>Payment Methods</h4>
              <p className='py-3 text-sm'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </article>
            <article className=''>
              <h4 className='text-primary text-base font-bold'>Cancellation Policy</h4>
              <p className='py-3 text-sm'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </article>
            <article className=''>
              <h4 className='text-primary text-base font-bold'>Long Stays</h4>
              <p className='py-3 text-sm'>We accept VISA, MasterCard, American Express, Paypal and Binance We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </article>
            <article className=''>
              <h4 className='text-primary text-base font-bold'>Cancellation Policy</h4>
              <p className='py-3 text-sm'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </article>
            <article className=''>
              <h4 className='text-primary text-base font-bold'>Cancellation Policy</h4>
              <p className='py-3 text-sm'>We accept VISA, MasterCard, American Express, Paypal and Binance</p>
            </article>
          </aside>
        </section>
      </main>
      <footer className='flex flex-col gap-4 p-5 pb-24 mt-12 bg-gray-100 text-gray-300'>
        <h3 className='font-bold' >About Us</h3>
        <ul className='flex flex-col gap-3'>
          <li>Investors</li>
          <li>Jobs</li>
          <li>Privacy policy</li>
          <li>Terms and Conditions</li>
          <li>Platzi Travel, inc</li>
          <li>Follow Us</li>
        </ul>
        <div className='flex gap-3'>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-300' viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="currentColor"/></svg>  
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 text-gray-300' viewBox="0 0 26 26"><path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z" fill="currentColor"/></svg>
          </span>
        </div>
      </footer>
      <aside id="tab_bar" 
        className='h-16 w-full flex justify-center items-center gap-10 fixed bottom-0 bg-white opacity-95 shadow-custom lg:hidden'>
        <a href="#home" className='text-color-white'>
          <svg className='w-8 h-8 text-gray-300 hover:text-primary' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.707 2.29303C10.5195 2.10556 10.2652 2.00024 10 2.00024C9.73488 2.00024 9.48057 2.10556 9.29304 2.29303L2.29304 9.29303C2.11088 9.48163 2.01009 9.73423 2.01237 9.99643C2.01465 10.2586 2.11981 10.5094 2.30522 10.6948C2.49063 10.8803 2.74144 10.9854 3.00364 10.9877C3.26584 10.99 3.51844 10.8892 3.70704 10.707L4.00004 10.414V17C4.00004 17.2652 4.1054 17.5196 4.29293 17.7071C4.48047 17.8947 4.73482 18 5.00004 18H7.00004C7.26526 18 7.51961 17.8947 7.70715 17.7071C7.89468 17.5196 8.00004 17.2652 8.00004 17V15C8.00004 14.7348 8.1054 14.4805 8.29293 14.2929C8.48047 14.1054 8.73482 14 9.00004 14H11C11.2653 14 11.5196 14.1054 11.7071 14.2929C11.8947 14.4805 12 14.7348 12 15V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4805 17.8947 12.7348 18 13 18H15C15.2653 18 15.5196 17.8947 15.7071 17.7071C15.8947 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5095 10.8803 17.6949 10.6948C17.8803 10.5094 17.9854 10.2586 17.9877 9.99643C17.99 9.73423 17.8892 9.48163 17.707 9.29303L10.707 2.29303Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="#trending">
          <svg className='w-8 h-8 text-gray-300 hover:text-primary' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="">
          <svg className='w-8 h-8 text-gray-300 hover:text-primary' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z" fill="currentColor"/>
          </svg>
        </a>
        <a href="">
          <svg className='w-8 h-8 text-gray-300 hover:text-primary' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z" fill="currentColor"/>
          </svg>
        </a>
      </aside>
    </>
  )
}

export default App
