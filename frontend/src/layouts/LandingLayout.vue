<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';


const authstore = useAuthStore()
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

      <v-app-bar-title>
        <v-img @click="router.push('/')"  :width="180" class="cursor-pointer" aspect-ratio="16/9" src="/src/assets/logo.png"> </v-img>
      </v-app-bar-title>

      <template v-if="!authstore.isLoggedIn" v-slot:append>
        <v-btn @click="router.push('/login')" rounded="xl" class="me-4"> Login </v-btn>
        <v-btn @click="router.push('/signup')" rounded="xl" variant="flat" color="main-color"> Sign Up </v-btn>
      </template>

      <template v-slot:append>
        <v-btn @click="router.push(authstore.getUserHome())" rounded="xl" class="me-4"> go to app </v-btn>
      </template>
    </v-app-bar>
    <v-main class="d-flex align-center justify-center">
      <slot />
    </v-main>
  </v-layout>
</template>
