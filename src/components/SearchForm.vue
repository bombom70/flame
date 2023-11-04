<script setup lang="ts">
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import _ from 'lodash'

const store = useStore()
const value = ref('')

const getSearchPeoples = _.debounce(async (val: string) => {
  await store.dispatch('fetchSearchPeoples', val)
  }, 
  500
)

watch(value, getSearchPeoples)

</script>

<template>
  <form @submit.prevent class="form">
    <input
      type="text"
      name="r"
      class="form__input"
      v-model="value"
    />
    <img class="form__icon" src="../assets/search.svg"/>
  </form>
</template>

<style scoped>
.form {
  position: relative;
  display: flex;
  align-items: center;
  width: 330px;
  background: white;
}
.form__input {
  width: 100%;
  padding: 8px;
  border-radius: 20px;
  border: 1px solid gray;
  box-sizing: border-box;
  background: white;
  color: black;
}

.form__icon {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
}
</style>