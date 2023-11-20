export const state = ref({
  counter: 0,
})

export function useStoreCounter() {
  return {
    counter: computed(() => state.value.counter),
    inc: () => state.value.counter++,
    dec: () => state.value.counter--,
  }
}
