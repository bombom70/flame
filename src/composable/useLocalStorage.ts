import { ref, watch } from "vue"

export const useLocalStorage = (data: string[], key: string) => {
  const ids = ref(data)

  const storageValue = window.localStorage.getItem(key)
  
  if (storageValue) {
    ids.value = JSON.parse(storageValue)
  }

  watch(ids, (val) => {
    window.localStorage.setItem(key, JSON.stringify(val))
  })

  return ids
}
