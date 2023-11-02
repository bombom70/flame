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
  overflow-x: auto;
}

.person-detail__th {
  max-width: 200px;
}

.person-detail__td {
  max-width: 200px;

}
</style>