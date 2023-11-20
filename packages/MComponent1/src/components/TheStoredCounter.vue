<script setup lang="ts">
import { useStoreCounter } from './../composables/state'

const { counter, inc, dec } = useStoreCounter()

</script>

<template>
  <div flex flex-col>
    <div>
      Vue 3 library
    </div>
    {{ counter }} 
    <button class="inc" @click="inc()">
      +
    </button>
    <button class="dec" @click="dec()">
      -
    </button>
  </div>
</template>
