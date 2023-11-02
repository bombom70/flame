<script setup lang="ts">
import ButtonStorage from './ButtonStorage.vue';
import { IPeople } from '../models/models'

defineProps<{
  peoples: IPeople[]
}>()

</script>

<template>
  <table class="table">
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
          <button-storage :id="people.id"/>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 100%;
}

.table__th {
  text-align: start;  
}
</style>