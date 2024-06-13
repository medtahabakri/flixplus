<script setup lang="ts">
import { useCategoriesStore } from '@/stores/category';

const router = useRouter();
const categoriesStore = useCategoriesStore();
</script>
<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer permanent rail expand-on-hover>
      <v-list>
        <v-list-item>
          <v-img
            @click="router.push('/')"
            :width="180"
            class="cursor-pointer mx-auto"
            aspect-ratio="16/9"
            src="/src/assets/logo.png"
          >
          </v-img>
        </v-list-item>
        <v-list-item @click="router.push('/app')" prepend-icon="mdi-home">
          Home
        </v-list-item>
        <v-list-item v-for="category in categoriesStore.categories" :href="`/app/${category.alias}`" prepend-icon="mdi-view-list">
          {{category.label}}
        </v-list-item>
        <!-- <v-list-item href="/app/drama" prepend-icon="mdi-drama-masks">
          Drama
        </v-list-item>
        <v-list-item href="/app/comedy" prepend-icon="mdi-emoticon-excited">
          Comedy
        </v-list-item>
        <v-list-item href="/app/horror" prepend-icon="mdi-ghost">
          Horror
        </v-list-item>
        <v-list-item href="/app/animated" prepend-icon="mdi-teddy-bear">
          Animated
        </v-list-item> -->
        <v-list-item href="/app/account" prepend-icon="mdi-account">
          Account
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 100vh;">
        <slot />
    </v-main>
  </v-layout>
</template>
