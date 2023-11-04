<script setup lang="ts">
import TablePeoples from '../components/TablePeoples.vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(async() => {
  await store.dispatch('fetchPeoples')
})

</script>

<template>
  <div>
    <div class="header">
      <router-link to="/">Home</router-link>
    </div>
    <TablePeoples />
  </div>
</template>