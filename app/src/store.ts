import Vue from 'vue'
import Vuex from 'vuex'
import { state } from 'mcomponent1'

Vue.use(Vuex)

state.value.counter = 0

export default new Vuex.Store({
  state: state.value,

  getters: {
    getCounter: (state) => state.counter,
  }
})