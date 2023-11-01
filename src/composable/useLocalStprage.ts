import { ref, watch } from "vue"

export const useLocalStorage = () => {
  const value = ref('')

  watch(value, (val) => {
    window.localStorage.setItem('Hello', val)
  })
  
}

const ids = <string[]>[]
const isInStore = ref(false)
const storageValue = window.localStorage.getItem('ids')

const changeVal = () => {
  isInStore.value = !isInStore.value
}

watch(isInStore, () => {
  if (storageValue) {
    const prevStorageValue = JSON.parse(storageValue)
    ids.push(props.id)
    window.localStorage.setItem('ids', JSON.stringify([...ids, ...prevStorageValue]))
  }
})
