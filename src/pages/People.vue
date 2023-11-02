<script setup lang="ts">
import TablePeoples from '../components/TablePeoples.vue'
import SearchForm from '../components/SearchForm.vue'
import SearchList from '../components/SearchList.vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

onMounted(async () => {
  await store.dispatch('fetchPeoples')
})

const peoples = computed(() => {
  return store.getters.getPeoples
})
</script>

<template>
  <div>
    <div class="header">
      <router-link to="/">Home</router-link>
    </div>
    <search-form />
    <search-list />
    <TablePeoples :peoples="peoples"/>
  </div>
</template>