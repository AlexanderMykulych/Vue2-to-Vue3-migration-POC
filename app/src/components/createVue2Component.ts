import { Component, h, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { WrapperResult } from "mcomponent1"

export function createVue2Component(vue3ComponentWrapper: WrapperResult): Component {
  return {
    name: 'ProxyComponent',
    setup(_props, context) {
      const container = ref()
      const component = ref()
      const updateCallback = ref()

      console.log(context);

      onMounted(() => {
        component.value = vue3ComponentWrapper(
          container.value,
          {
            props: context.attrs,
            listeners: context.listeners,
            onUpdate: (cb) => updateCallback.value = cb,
          },
        )

        watch(
          () => context.attrs,
          (attrs) => updateCallback.value(attrs),
          { deep: true })
      })

      onBeforeUnmount(() => component.value?.$destroy())

      return () => h('div', { ref: container })
    }
  } satisfies Component
}
