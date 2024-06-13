<script setup lang="ts">
import { useMoviesStore } from '@/stores/movie';
const router = useRouter();
const movieStore = useMoviesStore(); 
const movieslist = ref<any[]>([]);
movieslist.value = movieStore.movies

</script>
<template>
    <AppLayout>
        <div class="hero-types">
            <v-img
                @click="router.push('/')"
                :width="380"
                class="cursor-pointer mx-auto"
                aspect-ratio="16/9"
                src="/src/assets/logo.png"
            >
            </v-img>
        </div>
        <v-container class="mt-5">
            <v-row>
                <v-col v-for="movie in movieslist" cols="4" class="text-decoration-none pa-5 cursor-pointer">
                    <v-button variant="link" @click="router.push('/app/movie/'+movie.id)">
                        <div class="movie-wrapper">
                            <v-img aspect-ratio="1.7" :src="movie.img" width="100%" height="100%" cover rounded="lg"></v-img>
                        </div>
                        <h4 class="movie-title text-decoration-none">{{movie.title}}</h4>
                    </v-button>
                </v-col>
            </v-row>
        </v-container>
    </AppLayout>
</template>