import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sb-admin-2.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import Pickup from './views/Pickup.vue'
import Dropoff from './views/Dropoff.vue'
import Aboutus from './views/Aboutus.vue'
import Finddroppoint from './views/Finddroppoint.vue'
import Services from './views/Services.vue'
import Shippingrates from './views/Shippingrates.vue'
import Tracetrack from './views/Tracetrack.vue'
import Faq from './views/Faq.vue'
import Packaginginformation from './views/Packaginginformation.vue'
import Term from './views/Term.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Dashboard from './views/Dashboard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pickup', component: Pickup },
  { path: '/dropoff', component: Dropoff },
  { path: '/aboutus', component: Aboutus },
  { path: '/finddroppoint', component: Finddroppoint },
  { path: '/services', component: Services },
  { path: '/shippingrates', component: Shippingrates },
  { path: '/tracetrack', component: Tracetrack },
  { path: '/faq', component: Faq },
  { path: '/packaginginformation', component: Packaginginformation },
  { path: '/term', component: Term },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.component('Navbar', Navbar)
app.component('Footer', Footer)
app.use(router)
app.mount('#app')
