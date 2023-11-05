<script setup lang="ts">
import { onMounted, computed, reactive, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute();
const keys = reactive<string[]>([]);

onMounted(async () => {
  await store.dispatch('fetchPeopleById', route.params.id)
})

const person = computed(() => {
  return store.getters.getPerson
})

watch(person, () => {
  keys.push(...Object.keys(person.value))
})
</script>

<template>
  <div class="header">
    <router-link to="/">Home</router-link>
  </div>
  <table class="person-detail">
    <thead>
      <tr>
        <th
          v-for="key in keys"
          :key="key"
          class="person-detail__th"
        >
        {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td
          v-for="(value, key) in person"
          :key="key"
          class="person-detail__td"
        >
          <div v-if="Array.isArray(value)">
            <p
              v-for="v of value"
              :key="v"
            >
              {{ v }}
            </p>
          </div>
          <div v-else>
            {{ value.length > 0 ? value : '-' }}
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
.person-detail {
  width: 100%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  overflow-x: auto;
  border-collapse: collapse;
  border-radius: 4px;
}

.person-detail__th {
  padding: 10px 20px;
  background: rgb(209, 207, 207);
  text-align: center;
}

.person-detail__td {
  padding: 10px;
  text-align: center;
}

.person-detail__td:not(:last-child) {
  border-right: 1px solid #ccc;
}
</style>