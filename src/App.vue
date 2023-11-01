<script setup lang="ts">
import ButtonStorage from './components/ButtonStorage.vue'
</script>

<template>
  <div class="container">
    <button-storage :id="'1'"/>
    <button-storage :id="'2'"/>
    <button-storage :id="'3'"/>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
