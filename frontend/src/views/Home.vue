<template>
  <div class="homepadding">
    <div class="homepage-image-container">
      <img
        src="/public/heroimg.jpg"
        alt="Homepage Image"
        class="homepage-image"
      />
    </div>
    <!-- <section class="section__container booking__container">
      <form action="/" class="booking__form">
        <div class="input__group">
          <div class="trace-track-container">
            <label for="check-in">Trace & Track</label>
            <div class="input-wrapper">
              <input type="text" id="trackingNumber" class="form-control" v-model="trackingNumber"/>
              <button @click="trackPackage" type="button" class="btn small-btn">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        
      </form>
    </section> -->

    <section class="section__container about__container ordersearch sectionutama" id="about">
      <div class="about__content">
        <!-- <p class="section__subheader">ORDER OR SEARCH</p> -->
        <h2 class="section__header">
          LAYANAN UTAMA
        </h2>
        <p class="section__description">
          Kami menawarkan layanan pick up dan drop off, serta tracking barang real-time untuk pengiriman yang cepat, aman, dan transparan.
        </p>
        <div class="about__btn btnutama">
          <router-link to="/order" class="btn btn-continue"
            >Order</router-link
          >
          <router-link to="/tracetrack" class="btn btn-continue"
            >Tracking</router-link
          >
        </div>
      </div>
      <!-- <div class="about__image">
        <img src="/public/kurir.jpeg" alt="about" />
      </div> -->
    </section>

    <section class="section__container about__container" id="about" style="background-color: #D9D9D9;">
      <div class="about__image py-3">
        <img src="/public/kurir.jpeg" alt="about" />
      </div>
      <div class="about__content">
        <p class="section__subheader">TENTANG KAMI</p>
        <h2 class="section__header">
          Pengiriman Barang yang Terbaik Dimulai dari Sini!
        </h2>
        <p class="section__description">
          Dengan fokus pada layanan pengiriman berkualitas, pengalaman yang
          dipersonalisasi, dan proses pemesanan yang mulus, platform kami
          didedikasikan untuk memastikan setiap pelanggan dapat mengirimkan
          barang mereka dengan percaya diri dan ketenangan.
        </p>
        <div class="about__btn">
          <button class="btn btn-continue">Selengkapnya</button>
        </div>
      </div>
    </section>

    <section class="section__container room__container">
      <p class="section__subheader">PROMO</p>
      <h2 class="section__header">Dapatkan Promo Menarik dari Kami</h2>
      <div class="room__grid">
        <div class="room__card">
          <div class="room__card__image">
            <img src="/public/memoriable.jpeg" alt="room" />
            <div class="room__card__icons">
              <span><i class="ri-heart-fill"></i></span>
              <span><i class="ri-paint-fill"></i></span>
              <span><i class="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div class="room__card__details">
            <h4>Diskon 50% untuk Pengiriman Pertama Anda!</h4>
            <p>
              Nikmati diskon 50% untuk pengiriman pertama Anda menggunakan kode
              promo FIRST50.
            </p>
            <ul>
              <li>Berlaku untuk pengguna baru.</li>
              <li>Maksimal diskon Rp50.000.</li>
              <li>Berlaku hingga 31 Juli 2024.</li>
            </ul>
            <button class="btn btn-promo">Claim Discount</button>
          </div>
        </div>
        <div class="room__card">
          <!-- Card 2 -->
          <div class="room__card__image">
            <img src="/public/memoriable.jpeg" alt="room" />
            <div class="room__card__icons">
              <span><i class="ri-heart-fill"></i></span>
              <span><i class="ri-paint-fill"></i></span>
              <span><i class="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div class="room__card__details">
            <h4>Pengiriman Gratis untuk Pengguna Setia!</h4>
            <p>
              Dapatkan 1 pengiriman gratis setelah Anda melakukan 5 kali
              pengiriman dengan aplikasi kami.
            </p>
            <ul>
              <li>Pengiriman gratis berlaku untuk pengiriman dalam kota.</li>
              <li>Promo ini tidak dapat digabungkan dengan promo lainnya.</li>
              <li>Tidak ada batasan waktu untuk mengumpulkan 5 pengiriman.</li>
            </ul>
            <button class="btn btn-promo">Get Free Delivery</button>
          </div>
        </div>
        <div class="room__card">
          <!-- Card 3 -->
          <div class="room__card__image">
            <img src="/public/memoriable.jpeg" alt="room" />
            <div class="room__card__icons">
              <span><i class="ri-heart-fill"></i></span>
              <span><i class="ri-paint-fill"></i></span>
              <span><i class="ri-shield-star-line"></i></span>
            </div>
          </div>
          <div class="room__card__details">
            <h4>Ajak Teman, Dapatkan Bonus Kredit Pengiriman!</h4>
            <p>
              Ajak teman Anda untuk bergabung dengan aplikasi kami dan dapatkan
              bonus kredit pengiriman sebesar Rp25.000.
            </p>
            <ul>
              <li>
                Teman yang diundang harus mendaftar dan melakukan pengiriman
                pertama menggunakan kode referal Anda.
              </li>
              <li>
                Diskon 20% untuk teman yang diundang berlaku dengan maksimal
                diskon Rp30.000.
              </li>
              <li>
                Bonus kredit pengiriman berlaku hingga 60 hari setelah diterima.
              </li>
            </ul>
            <button class="btn btn-promo">Invite Friends</button>
          </div>
        </div>
      </div>
    </section>

 <!-- Bagian untuk menampilkan hasil pelacakan -->


    <!-- <section class="service" id="service">
      <div class="section__container service__container">
        <div class="service__content">
          <p class="section__subheader">SERVICES</p>
          <h2 class="section__header">Strive Only For The Best.</h2>
          <ul class="service__list">
            <li>
              <span><i class="ri-shield-star-line"></i></span>
              High Class Security
            </li>
            <li>
              <span><i class="ri-24-hours-line"></i></span>
              24 Hours Room Service
            </li>
            <li>
              <span><i class="ri-headphone-line"></i></span>
              Conference Room
            </li>
            <li>
              <span><i class="ri-map-2-line"></i></span>
              Tourist Guide Support
            </li>
          </ul>
        </div>
      </div>
    </section> -->

    <!-- <section class="section__container banner__container">
      <div class="banner__content">
        <div class="banner__card">
          <h4>25+</h4>
          <p>Properties Available</p>
        </div>
        <div class="banner__card">
          <h4>350+</h4>
          <p>Bookings Completed</p>
        </div>
        <div class="banner__card">
          <h4>600+</h4>
          <p>Happy Customers</p>
        </div>
      </div>
    </section> -->

    <!-- <section class="explore" id="explore">
      <p class="section__subheader">EXPLORE</p>
      <h2 class="section__header">What's New Today.</h2>
      <div class="explore__bg">
        <div class="explore__content">
          <p class="section__description">10th MAR 2023</p>
          <h4>A New Menu Is Available In Our Hotel.</h4>
          <button class="btn">Continue</button>
        </div>
      </div>
    </section> -->
  </div>
</template>

<!-- <script src="https://unpkg.com/scrollreveal"></script> -->

<script>
import axios from 'axios';

export default {
  name: "Tracetrack",
  data() {
    return {
      trackingNumber: "",
      trackingResult: null,
    };
  },
  methods: {
    async trackPackage() {
      try {
        const response = await axios.get(`https://kirimkan-be.vercel.app/api/v1/shipments/${this.trackingNumber}`);
        console.log('Response data:', response.data); // Tambahkan console.log untuk melihat data
        this.trackingResult = response.data.data;
      } catch (error) {
        console.error("Error fetching tracking data:", error);
        alert("Nomor pelacakan tidak ditemukan atau terjadi kesalahan pada server.");
        this.trackingResult = null;
      }
    },
  },
};

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

:root {
  --primary-color: #e82574;
  --primary-color-dark: #bc1c5c;
  --text-dark: #0c0a09;
  --text-light: #78716c;
  --white: #ffffff;
  --max-width: 1200px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.homepage-image-container {
  /* text-align: center; */
  margin-bottom: 20px;
}

.homepage-image {
  width: 100%;
  max-width: 1400px;
  height: 600px;
}

.section__container {
  max-width: var(--max-width);
  margin: auto;
  padding: 1rem;
}

.button__section {
  display: flex;
  justify-content: center;
}

.button__group {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 20px 70px;
  font-size: 16px;
  cursor: pointer;
}

.section__subheader {
  margin-bottom: 0.5rem;
  position: relative;
  font-weight: 500;
  letter-spacing: 2px;
  color: var(--text-dark);
}

.section__subheader::after {
  position: absolute;
  content: "";
  top: 50%;
  transform: translate(1rem, -50%);
  height: 2px;
  width: 4rem;
  background-color: var(--primary-color);
}

.section__header {
  /* max-width: 600px; */
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 3rem;
  color: var(--text-dark);
}

.section__description {
  max-width: 600px;
  margin-bottom: 1rem;
  color: var(--text-light);
}

.btn {
  /* padding: 0.75rem 1.5rem; */
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  color: var(--white);
  background-color: var(--primary-color);
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-continue {
  padding: 0.75rem 1.5rem;
}

.btn-promo {
  padding: 0.4rem 1.5rem;
  text-align: center;
  margin-top: 20px;
}
.btn:hover {
  background-color: var(--primary-color-dark);
  color: var(--primary-color);
}

img {
  width: 100%;
  display: flex;
}

a {
  text-decoration: none;
}

.logo {
  max-width: 120px;
}

html,
body {
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
}

.header {
  /* background-image: url("assets/header.jpg"); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

nav {
  position: fixed;
  isolation: isolate;
  top: 0;
  width: 100%;
  max-width: var(--max-width);
  margin: auto;
  z-index: 9;
}

.nav__bar {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background-color: var(--primary-color);
}

.nav__menu__btn {
  font-size: 1.5rem;
  color: var(--white);
  cursor: pointer;
}

.nav__links {
  list-style: none;
  position: absolute;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: rgba(188, 28, 92, 0.9);
  transform: translateY(-100%);
  transition: 0.5s;
  z-index: -1;
}

.nav__links.open {
  transform: translateY(0);
}

.nav__links a {
  position: relative;
  isolation: isolate;
  padding-bottom: 8px;
  color: var(--white);
  transition: 0.3s;
}

.nav__btn {
  display: none;
}

.header__container {
  padding-block: 10rem 15rem;
}

.header__container p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: var(--white);
  text-align: center;
  opacity: 0.6;
}

.header__container h1 {
  font-size: 4rem;
  font-weight: 500;
  line-height: 4.5rem;
  color: var(--white);
  text-align: center;
}

.header__container h1 span {
  color: var(--primary-color);
}

.booking__container {
  padding-block: 0;
}

.booking__form {
  padding: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--white);
  border-radius: 10px;
  transform: translateY(-50%);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.input__group {
  flex: 1 1 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.input__group span {
  font-size: 1.75rem;
  color: var(--primary-color);
}

.input__group label {
  font-weight: 500;
  color: var(--text-dark);
}

.input__group input {
  display: block;
  width: 100%;
  width: 300px;
  /* max-width: 150px; */
  padding-block: 5px;
  color: var(--text-dark);
  font-size: 0.9rem;
  outline: none;
  margin-right: 5px;
  /* border: none; */
}

.input__group input::placeholder {
  color: var(--text-light);
}

.small-btn {
  width: 30px;
  height: 30px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 4px;
  overflow: hidden;
  /* background-color: #fff; */
}
.about__container {
  overflow: hidden;
  display: grid;
  gap: 2rem;
}

.about__image img {
  max-width: 450px;
  margin: auto;
  border-radius: 5px;
}

.room__grid {
  margin-top: 4rem;
  display: grid;
  gap: 1rem;
}

.room__card {
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.room__card__image {
  position: relative;
  isolation: isolate;
}

.room__card__icons {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  z-index: 1;
}

.room__card__icons span {
  display: inline-block;
  padding: 2px 8px;
  font-size: 1.5rem;
  background-color: var(--white);
  border-radius: 100%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.room__card__icons span:nth-child(1) {
  color: #f472b6;
}

.room__card__icons span:nth-child(2) {
  color: #c084fc;
}

.room__card__icons span:nth-child(3) {
  color: #60a5fa;
}

.room__card__details {
  padding: 1rem;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.room__card__details ul {
  margin-left: 20px;
}

.room__card h4 {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-dark);
}

.room__card p {
  margin-bottom: 0.5rem;
  color: var(--text-light);
}

.room__card h5 {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-light);
}

.room__card h5 span {
  font-size: 1.1rem;
  color: var(--text-dark);
}

.service {
  /* background-image: url("assets/service.jpg"); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.service__container {
  padding-block: 0;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
}

.service__content {
  grid-column: 1/3;
  padding: 2rem 4rem;
  background-color: var(--white);
}

.service__list {
  list-style: none;
  margin-top: 2rem;
  display: grid;
  gap: 2rem;
}

.service__list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-dark);
}

.service__list span {
  padding: 5px 12px;
  font-size: 1.75rem;
  color: var(--text-dark);
  background-color: var(--text-light);
  border-radius: 100%;
}

.service__list li:nth-child(1) span {
  color: #60a5fa;
  background-color: #dbeafe;
}

.service__list li:nth-child(2) span {
  color: #f472b6;
  background-color: #fce7f3;
}

.service__list li:nth-child(3) span {
  color: #c084fc;
  background-color: #f3e8ff;
}

.service__list li:nth-child(4) span {
  color: #fb7185;
  background-color: #ffe4e6;
}

.banner__content {
  padding: 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
}

.banner__card {
  text-align: center;
  flex: 1 1 180px;
}

.banner__card h4 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-dark);
}

.banner__card p {
  color: var(--text-light);
}

.explore :is(.section__subheader, .section__header) {
  text-align: center;
  margin-inline: auto;
}

.explore__bg {
  margin-top: 4rem;
  padding-block: 3rem;
  display: grid;
  grid-template-columns:
    minmax(1rem, 1fr)
    minmax(0, var(--max-width))
    minmax(1rem, 1fr);
  /* background-image: url("assets/explore.jpg"); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.explore__content {
  grid-column: 2/3;
  max-width: 400px;
  padding: 2rem;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.explore__content p {
  margin-bottom: 0.5rem;
}

.explore__content h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: var(--text-dark);
}

.explore__content .btn {
  color: var(--primary-color);
  background-color: var(--white);
  border: 1px solid var(--primary-color);
}

.sectionutama {
  margin-bottom: 100px;
}

.explore__content .btn:hover {
  color: var(--white);
  background-color: var(--primary-color);
}

.footer {
  background-color: var(--text-dark);
}

.footer__container {
  display: grid;
  gap: 4rem 2rem;
}

.footer__col .section__description {
  margin-block: 2rem;
}

.footer__col h4 {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--white);
}

.footer__links {
  list-style: none;
  display: grid;
  gap: 1rem;
}

.footer__links a {
  color: var(--text-light);
  transition: 0.3s;
}

.footer__links a:hover {
  color: var(--white);
}

.footer__socials {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer__socials img {
  max-width: 25px;
  opacity: 0.8;
  transition: 0.3s;
}

.footer__socials img:hover {
  opacity: 1;
}

.footer__bar {
  padding: 1rem;
  font-size: 0.9rem;
  color: var(--text-light);
  text-align: center;
}

@media (width > 576px) {
  .room__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width > 768px) {
  nav {
    padding: 2rem 1rem;
    position: static;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav__bar {
    padding: 0;
    background-color: transparent;
  }

  .nav__menu__btn {
    display: none;
  }

  .homepadding {
    padding-top: 70px;
  }
  .nav__links {
    padding: 0;
    width: unset;
    position: static;
    transform: none;
    flex-direction: row;
    background-color: transparent;
  }

  .nav__btn {
    display: block;
  }

  .nav__links a::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: var(--primary-color);
    transition: 0.3s;
    transform-origin: left;
  }

  .nav__links a:hover::after {
    width: 100%;
  }

  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .room__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .service__content {
    grid-column: 2/3;
  }

  .ordersearch {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .btnutama {
    display: flex;
    justify-content: space-between;
  }

  .footer__container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (width > 1024px) {
  .room__grid {
    gap: 2rem;
  }
}
</style>