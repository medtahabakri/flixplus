<script setup lang="ts"></script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar
      scroll-behavior="elevate hide"
      color="transparent"
      flat
      :elevation="0"
      rounded
      class="pa-3"
    >
      <!-- <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template> -->

      <v-app-bar-title>
        <v-img :width="180" aspect-ratio="16/9" src="/src/assets/logo.png"> </v-img>
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn class="me-4"> Login </v-btn>
        <v-btn variant="flat" color="main-color"> Sign Up </v-btn>
      </template>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <slot />
    </v-main>
  </v-layout>
</template>
