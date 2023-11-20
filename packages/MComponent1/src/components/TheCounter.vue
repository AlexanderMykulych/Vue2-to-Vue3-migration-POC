<script setup lang="ts">
const props = defineProps<{
  count: number
}>()

const emits = defineEmits<{
  (event: 'updateCount', count: number): void
}>()

const { count, inc, dec } = useCounter(props.count)

watch(count, () => emits('updateCount', count.value))
</script>

<template>
  <div flex flex-col>
    <div>
      Vue 3 library
    </div>
    {{ count }} * 2 = {{ count * 2 }}
    <button class="inc" @click="inc()">
      +
    </button>
    <button class="dec" @click="dec()">
      -
    </button>
  </div>
</template>
