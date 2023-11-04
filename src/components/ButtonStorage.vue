<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  id: string,
  ids: string[],
  toggleElementToStore: (id: string) => void
}>()

const textBtn = computed(() => {
  return props.ids.indexOf(props.id) < 0 ? 'Добавить' : 'Удалить'
})

</script>

<template>
  <button class="btn" @click="toggleElementToStore(props.id)">
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