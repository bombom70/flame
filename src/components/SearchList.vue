<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const peoples = computed(() => {
  return store.getters.getSearchPeoples.map(el => {
    const url = new URL(el.url)
    const data = url.pathname.split('/')
    const id = data[data.length - 2]
    return {
      id,
      ...el
    }
  })
})

</script>

<template>
  <div class="peoples-list" v-if="peoples.length">
    <div
      class="peoples-list__item"
      v-for="people in peoples"
      :key="people.id"
    >
      <router-link :to="'/peoples/' + people.id">
        {{ people.name }}
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.peoples-list {
  position: absolute;
  max-width: 330px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid gray;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  background: white;
  z-index: 2;
}

.peoples-list__item {
  padding: 10px 20px;
  border-bottom: 1px solid gray;
  box-sizing: border-box;
}

.peoples-list__item:last-child {
  border-bottom: none;
}
</style>