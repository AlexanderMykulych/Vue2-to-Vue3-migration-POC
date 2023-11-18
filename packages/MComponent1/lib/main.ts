import { wrapper } from './wrapper'
import CounterComponent from '../src/components/TheCounter.vue'

export type { WrapperResult } from './wrapper'
export const Counter = wrapper(CounterComponent)
