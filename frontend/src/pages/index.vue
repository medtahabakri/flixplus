<script setup lang="ts">

const router = useRouter()

</script>

<template>
  <LandingLayout> 
  <div class="hero-section">
    <h1 class="text-h1 text-center">
      Welcome to <span class="text-main-color">FlixPlus</span> Streaming platform
    </h1>
    <p class="text-h4 text-center my-10 text-grey-lighten-1">
      Join us and get access to the biggest collection of content.
    </p>
    <v-container>
      <v-row >
        <v-col
          cols="12"
          sm="6"
          offset-lg="2"
          lg="4"
          offset-xl="3"
          xl="3"
          class="text-center"
        >
          <v-btn @click="router.push('/login')" block variant="outlined" size="x-large" rounded="xl" color="main-color">Login</v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          lg="4"
          xl="3"
          class="text-center"
        >
          <v-btn @click="router.push('/signup')" block variant="flat" size="x-large" rounded="xl" color="main-color">Sign Up</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </LandingLayout>
</template>

<style scoped>

.hero-section{
  width: 75vw;
}

</style>
