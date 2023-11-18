import { DefineComponent, createApp } from 'vue'

export type WrapperResult = (container: Element | string, initialConfig: WrapperInitialConfig) => ComponentPublicInstance
type Component = DefineComponent<any, any, any>
type ComponentProps = Record<string, any>
type ComponentListeners = Record<string, any>

type WrapperInitialConfig = {
  props: ComponentProps
  listeners: ComponentListeners
  onUpdate: (propsChangeCb: (props:ComponentProps) => void) => void
}
export function wrapper<T extends Component>(component: T): WrapperResult {
  return (container: Element | string, { props, listeners, onUpdate }: WrapperInitialConfig) => {
    const refedProps: ComponentProps = {}

      Object.entries(props)
        .forEach(([key, value]) => refedProps[key] = ref(value))
      Object.entries(listeners)
        .forEach(([key, value]) => {
          const newKey = `on${capitalizeFirstLetter(key)}`
          refedProps[newKey] = (val) => value(val)
        })

    onUpdate((props) => {
      Object.entries(props).forEach(([key, value]) => {
        if (refedProps[key].value !== value) {
          refedProps[key].value = value
        }
      })
    })

    const vm = createApp(component, refedProps)
    console.log('vm', vm, refedProps)
    const instance = vm.mount(container)

    return instance
  }
}

function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}