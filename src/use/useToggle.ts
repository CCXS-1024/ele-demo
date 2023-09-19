import { Ref, ref } from 'vue'

export function useToggle(iniState: boolean): [Ref<boolean>, () => void] {
  const state = ref(iniState)

  const toggle = function () {
    state.value = !state.value
  }

  return [state, toggle]
}
