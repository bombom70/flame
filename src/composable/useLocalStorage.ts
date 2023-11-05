import { ref, watch, onMounted, onBeforeUpdate } from "vue"

export const useLocalStorage = (data: string[], key: string) => {
  const ids = ref(data)

  const toggleElementToStore = (id: string) => {
    const storageValue = window.localStorage.getItem('favorites')
    ids.value = JSON.parse(storageValue as "")  || [];
    if (ids.value.indexOf(id) < 0) {
      ids.value.push(id)
    } else { 
      ids.value = ids.value.filter((elId: string) => elId !== id)
    }
    window.localStorage.setItem(key, JSON.stringify(ids.value))
  }

  watch(ids, (val) => {
    window.localStorage.setItem(key, JSON.stringify(val))
  })

  onMounted(() => {
    const storageValue = window.localStorage.getItem(key)
    ids.value = JSON.parse(storageValue as "")  || []
  })

  return {
    ids,
    toggleElementToStore,
  }
}
