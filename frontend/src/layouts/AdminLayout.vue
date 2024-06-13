<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
const authstore = useAuthStore()
const router = useRouter();
if(!authstore.isLoggedIn){
  router.push('/')
}

const disconnect = ()=>{
  authstore.logout()
}
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
        <v-list-item @click.prevent="router.push('/admin')" href="/admin" prepend-icon="mdi-home">
          Home
        </v-list-item>
        <v-list-item @click.prevent="router.push('/admin/categories')" href="/admin/categories" prepend-icon="mdi-view-list">
          Categories
        </v-list-item>
        <v-list-item @click.prevent="router.push('/admin/movies')" href="/admin/movies" prepend-icon="mdi-filmstrip">
          Movies
        </v-list-item>
        <v-list-item @click.prevent="router.push('/admin/users')" href="/admin/users" prepend-icon="mdi-account-group">
          Users
        </v-list-item>
        <v-list-item @click.prevent="disconnect()" prepend-icon="mdi-logout">
          Log Out
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="height: 100vh;">
        <slot />
    </v-main>
  </v-layout>
</template>
