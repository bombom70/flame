<script setup lang="ts">
import { computed } from 'vue'
import ButtonStorage from './ButtonStorage.vue'
import { IPeople } from '../models/models'
import { useStore } from 'vuex'
import { useLocalStorage } from '../composable/useLocalStorage'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
const { ids, toggleElementToStore } = useLocalStorage([] ,'favorites');

const peoples = computed(() => {
  const peoples = store.getters.getPeoples
  if (route.path === '/favorites') {
    return peoples.filter((p: IPeople) => ids.value.includes(p.id))
  }
  return peoples
})
</script>

<template>
  <table v-if="peoples.length" class="table">
    <thead>
      <tr>
        <th class="table__th">Name</th>
        <th class="table__th">Height</th>
        <th class="table__th">Mass</th>
        <th class="table__th">Hair color</th>
        <th class="table__th">Button</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="people in peoples"
        :key="people.id"
      >
        <td>{{ people.name }}</td>
        <td>{{ people.height }}</td>
        <td>{{ people.mass }}</td>
        <td>{{ people.hair_color }}</td>
        <td>
          <button-storage
            :id="people.id"
            :ids="ids"
            :toggleElementToStore="toggleElementToStore"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <h2 v-else>List is empty</h2>
</template>

<style scoped>
.table {
  width: 100%;
}

.table__th {
  text-align: start;  
}
</style>