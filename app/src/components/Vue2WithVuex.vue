<template>
  <div flex flex-col>
    <span>vue2 + vuex</span>
    <div>{{ counter }}</div>
    <div>
      <button @click="inc">+</button>
      <button @click="dec">-</button>
    </div>

    <div>
      <MigratedCounter />
    </div>
  </div>
</template>

<script lang="ts">
import { createVue2Component } from './createVue2Component'
import { StoredCounter } from 'mcomponent1'

const MigratedCounter = createVue2Component(StoredCounter)


export default {
  components: {
    MigratedCounter,
  },
  name: 'Vue2WithVuex',
  computed: {
    counter(): number {
      return this.$store.getters.getCounter
    }
  },
  methods: {
    inc() {
      this.$store.state.counter++
    },
    dec() {
      this.$store.state.counter--
    },
  }
}
</script>