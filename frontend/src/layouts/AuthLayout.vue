<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <v-layout full-height class="rounded rounded-md">
    <v-app-bar
      scroll-behavior="hide"
      scroll-threshold="120"
      color="transparent"
      flat
      :elevation="0"
      rounded
      class="pa-3"
    >
      <!-- <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template> -->

      <v-app-bar-title class="text-center">
        <v-img @click="router.push('/')"  :width="180" class="cursor-pointer mx-auto" aspect-ratio="16/9" src="/src/assets/logo.png"> </v-img>
      </v-app-bar-title>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <slot />
    </v-main>
  </v-layout>
</template>
