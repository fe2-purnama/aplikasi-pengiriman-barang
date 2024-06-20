<template>
  <div>
    <div class="homepage-container">
      <div class="homepage-image-container">
        <img
          src="/public/homepage.jpeg"
          alt="Homepage Image"
          class="homepage-image"
        />
        <!-- Section untuk Order dan Search Trace and Track -->
        <section class="section__container button__section">
          <div class="button__group">
            <button @click="goToOrderPage" type="button" class="btn btn-primary">
              Order
            </button>
            <button @click="goToSearchPage" type="button" class="btn btn-secondary">
              Search
            </button>
          </div>
        </section>
      </div>
    </div>


    <section class="section__container about__container" id="about">
      <div class="about__image">
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
  </div>
</template>

<script>
export default {
  methods: {
    goToOrderPage() {
      this.$router.push('/order');
    }
  }
}
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.button__group {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 10px 20px;
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
  display: block;
}

.booking__form {
  display: flex;
  justify-content: space-between;
  background-color: #d1d0d7;
  padding: 2rem 3rem;
  border-radius: 10px;
}

.input__group {
  display: flex;
  align-items: center;
  flex: 1;
  border-right: 1px solid var(--primary-color);
  padding: 0 2rem;
}

.input__group:last-child {
  border-right: none;
}

.trace-track-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.trace-track-container label {
  font-weight: 600;
  color: var(--text-dark);
}

.input-wrapper {
  display: flex;
  align-items: center;
}

.input-wrapper input {
  padding: 0.75rem;
  outline: none;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.input-wrapper button {
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.about__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5rem;
}

.about__image {
  /* height: 50px; */
}

.about__image img {
  border-radius: 10px;
}

.about__content .section__subheader {
  position: relative;
}

.about__content .section__subheader::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(6rem, -50%);
  width: 4rem;
  height: 2px;
  background-color: var(--primary-color);
}

.room__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.room__card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
}

.room__card__image {
  position: relative;
}

.room__card__image img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 200px;
  object-fit: cover;
}

.room__card__image .room__card__icons {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.room__card__image .room__card__icons span {
  color: var(--primary-color);
  background-color: var(--white);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.room__card__details {
  background-color: var(--white);
  padding: 1rem;
}

.room__card__details h4 {
  color: var(--text-dark);
}

.room__card__details p {
  margin: 0.5rem 0;
  color: var(--text-light);
}
</style>
