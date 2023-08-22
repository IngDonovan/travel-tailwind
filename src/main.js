import './style.css'


document.querySelector('#app').innerHTML = `
<header>
  <nav>
    <span>DarkMode</span>
    <div>
      <span>search</span>
      San Francisco
    </div>
    <button>Explore More</button>
  </nav>
</header>
<main>
  <section>
    <h2>Our Recomendations</h2>
    <article>
      <picture></picture>
      <h4>Norway</h4>
      <p>Beautiful landscapes</p>
    </article>
  </section>
  <section>
    <h2>Trending Stays</h2>
    <article>
      <picture>
        <h3>Chicago</h3>
        <p></p>
      </picture>
    </article>
  </section>
  <section>
    <h3>FAQs</h3>
    <article>
      <h4>Payment Methods</h4>
      <p>We accept VISA, MasterCard, American Express, Paypal and Binance, We accept VISA, 
        MasterCard, American Express, Paypal and Binance.</p>
    </article>
  </section>
</main>
<footer>
  <h3>About Us</h3>
  <p>Jobs</p>
  <p>Privacy policy</p>
  <p>Terms and Conditions</p>
  <p>Platzi Travel, inc</p>
  <p>Follow Us</p>
  <picture>
    <span>Twitter</span>
    <span>Instagram</span>
  </picture>
</footer>
`
