<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { useLocalStorage } from '../composable/useLocalStorage';

const props = defineProps<{
  id: string
}>()

const inStore = ref(false)
const ids = ref([])
// const storage = useLocalStorage(ids, 'favorites')

const addToFavorites = () => {
  inStore.value = !inStore.value
  const storageValue = window.localStorage.getItem('favorites')
  ids.value = JSON.parse(storageValue as "")  || [];
  if (inStore.value) {
    ids.value.push(props.id)
  } else { 
    ids.value = ids.value.filter((id: string) => id !== props.id)
  }
  window.localStorage.setItem('favorites', JSON.stringify(ids.value))
}

onMounted(() => {
  const storageValue = window.localStorage.getItem('favorites')
  ids.value = JSON.parse(storageValue as "")  || []
  if (ids.value.indexOf(props.id) >= 0) {
    inStore.value = true;
  }
})

const textBtn = computed(() => {
  return inStore.value ? 'Удалить' : 'Добавить'
})
</script>

<template>
  <button class="btn" @click="addToFavorites">
    {{ textBtn }}
  </button>
</template>

<style scoped>
.btn {
  padding: 8px 16px;
  border-radius: 8px;
  background: white;
  color: black;
}
</style>