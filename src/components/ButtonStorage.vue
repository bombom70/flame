<script setup lang="ts">
import { ref, watch, computed } from 'vue'

const props = defineProps<{
  id: string
}>()

const isInStore = ref(false)
const storageValue = window.localStorage.getItem('ids')

const changeVal = () => {
  isInStore.value = !isInStore.value
}

watch(isInStore, () => {
  const ids = [];
  console.log('storageValue', storageValue)
  const prevStorageValue = JSON.parse(storageValue) || []
  console.log(prevStorageValue)
  ids.push(props.id)
  window.localStorage.setItem('ids', JSON.stringify([...ids, ...prevStorageValue]))
})

const textBtn = computed(() => {
  return isInStore.value ? 'Удалить' : 'Добавить'
})
</script>

<template>
  <button class="btn" @click="changeVal">
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