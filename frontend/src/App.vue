<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { useCategoriesStore } from "./stores/category";
import { useMoviesStore } from "./stores/movie";

const authStore = useAuthStore();
const categoriesStore = useCategoriesStore();
const moviesStore = useMoviesStore();
</script>

<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>


<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>