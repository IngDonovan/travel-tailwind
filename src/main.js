import './style.css'


document.querySelector('#app').innerHTML = `
<header class="w-full h-3/4 bg-gray-400 flex flex-col relative" >
  <nav></nav>
  <div class=" w-full h-full">
    <picture class="w-full h-full bg-red-100 flex flex-row">
      <span class="w-full h-full bg-sanFrancisco bg-cover bg-center bg-no-repeat"></span>
    </picture>
    <div class="absolute top-0 p-6 w-full h-full flex flex-col gap-5 align-center">
      <span class="">DarkMode</span>
      <div class="">
        <span>searchICo</span>
        <input type="search" name="" id="" placeholder="San Francisco">
      </div>
      <button class="bg-white justify-self-start">Explore More</button>
    </div>
  </div>
</header>

`
