<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface INotes {
  id: number
  text: string
}

// const notes = ref<INotes[]>([{id: 1, text: "Hello"}])
const notes = ref([{id: 1, text: "Hello"}])
const title = ref<string>('')

const add = () => {
  console.log('aasd');
  notes.value.push(title.value)
  title.value = ''
}
</script>

<template>
  <div>
    title === {{ title }}
    <input type="text" @keypress.enter="add" v-model="title"/>
    <ul>
    <li
      v-for="note in notes"
      :key="note.id"
    >

    </li>
  </ul>
  </div>
</template>