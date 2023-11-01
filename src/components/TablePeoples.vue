<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { IPeople } from '../models/models'

const store = useStore()
const peoples = ref<IPeople[]>([])

onMounted(async () => {
  await store.dispatch('fetchPeoples')
  peoples.value = store.state.peoples
})
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Height</th>
        <th>Mass</th>
        <th>Hair color</th>
        <th>Button</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="people in peoples"
        :key="people.name"
      >
      {{ people['hair_color'] }}
        <td>{{ people.name }}</td>
        <td>{{ people.height }}</td>
        <td>{{ people.mass }}</td>
        <td>{{ people.hairColor }}</td>
        <td>Add to favorites</td>
      </tr>
    </tbody>
  </table>
</template>