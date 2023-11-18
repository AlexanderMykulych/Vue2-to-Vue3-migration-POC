<script setup lang="ts">
const props = defineProps<{
  count: number
}>()

const emits = defineEmits<{
  'update:count': [count: number]
}>()

const { count, inc, dec } = useCounter(props.count)

watch(count, () => emits('update:count', count.value))
</script>

<template>
  <div flex flex-col>
    <div>
      Vue 2 library
    </div>
    {{ count }}
    <button class="inc" @click="inc()">
      +
    </button>
    <button class="dec" @click="dec()">
      -
    </button>
  </div>
</template>
