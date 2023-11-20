import { wrapper } from './wrapper'
import CounterComponent from '../src/components/TheCounter.vue'
import StoredComponent from '../src/components/TheStoredCounter.vue'

export type { WrapperResult } from './wrapper'
export const Counter = wrapper(CounterComponent)
export const StoredCounter = wrapper(StoredComponent)

export { state } from '../src/composables/state'
