import './style.css'


document.querySelector('#app').innerHTML = `
<header class="w-full h-3/4 bg-gray-400 flex flex-col relative" >
  <nav></nav>
  <div class=" w-full h-full">
    <picture class="w-full h-full bg-red-100 flex flex-row">
      <span class="w-full h-full bg-sanFrancisco bg-cover bg-center bg-no-repeat"></span>
    </picture>
    <div class="absolute top-0 p-6 w-full h-full flex flex-col gap-5 align-center self-center">
      <span class="self-end bg-white px-4 py-2 rounded-3xl">
        <img src="../svg/moon.svg" alt="" class="w-5 h-5">
      </span>
      <div class="flex align-center justify-center bg-white rounded-3xl shadow-custom">
        <span class="self-center">
          <img src="../svg/search.svg" alt="" class="w-6 h-6">
        </span>
        <input type="search" name="" id="" placeholder="San Francisco" class="text-center text-base py-4 px-0 rounded-3xl border-none outline-none bg-transparent focus:bg-transparent">
      </div>
      <button class="bg-white self-center mt-72 py-4 px-10 rounded-3xl text-primary font-Montserrat text-base font-bold  shadow-custom">Explore More</button>
    </div>
  </div>
</header>
<main>
  <section id="recomendations" class="py-7">
    <h2 class="text-primary font-bold text-2xl px-5 pb-7">Our Recomendations</h2>
    <aside class="flex gap-5 overflow-x-scroll px-5 ">
      <article class="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
        <picture class="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
        <div class="p-3">
          <h4 class="text-sm font-bold pb-1" >Norway</h4>
          <p class="text-xs ">Beautiful landscapes</p>
        </div>
      </article>
      <article class="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
        <picture class="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
        <div class="p-3">
          <h4 class="text-sm font-bold pb-1" >Norway</h4>
          <p class="text-xs ">Beautiful landscapes</p>
        </div>
      </article>
      <article class="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
        <picture class="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
        <div class="p-3">
          <h4 class="text-sm font-bold pb-1" >Norway</h4>
          <p class="text-xs ">Beautiful landscapes</p>
        </div>
      </article>
      <article class="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
        <picture class="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
        <div class="p-3">
          <h4 class="text-sm font-bold pb-1" >Norway</h4>
          <p class="text-xs ">Beautiful landscapes</p>
        </div>
      </article>
      <article class="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
        <picture class="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
        <div class="p-3">
          <h4 class="text-sm font-bold pb-1" >Norway</h4>
          <p class="text-xs ">Beautiful landscapes</p>
        </div>
      </article>
      <article class="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
        <picture class="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
        <div class="p-3">
          <h4 class="text-sm font-bold pb-1" >Norway</h4>
          <p class="text-xs ">Beautiful landscapes</p>
        </div>
      </article>
      <article class="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
        <picture class="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
        <div class="p-3">
          <h4 class="text-sm font-bold pb-1" >Norway</h4>
          <p class="text-xs ">Beautiful landscapes</p>
        </div>
      </article>
      <article class="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
        <picture class="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
        <div class="p-3">
          <h4 class="text-sm font-bold pb-1" >Norway</h4>
          <p class="text-xs ">Beautiful landscapes</p>
        </div>
      </article>
      <article class="w-40 h-48 min-w-max flex flex-col bg-secondary text-white rounded-lg shadow-custom">
        <picture class="w-full h-3/5 bg-norway bg-cover rounded-t-lg"></picture>
        <div class="p-3">
          <h4 class="text-sm font-bold pb-1" >Norway</h4>
          <p class="text-xs ">Beautiful landscapes</p>
        </div>
      </article>
    </aside>
  </section>
</main>
`
