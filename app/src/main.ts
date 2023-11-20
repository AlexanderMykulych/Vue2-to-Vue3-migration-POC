import Vue from 'vue'
import './style.css'
import App from './App.vue'
import 'uno.css'
import 'virtual:uno.css'
import store from './store'

window.globalStore = store

new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
})
