<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

</script>

<template>
  <RouterView />
</template>

<style scoped>
.nav-link.router-link-active {
  border-bottom: 2px solid #198754;
}
</style>
