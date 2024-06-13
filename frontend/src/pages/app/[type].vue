<script setup lang="ts">
import { useMoviesStore } from '@/stores/movie';
const route = useRoute();
const router = useRouter();

const movieStore = useMoviesStore(); 

const movieslist = ref<any[]>([]);

const type = route.params?.type ?? '';
movieslist.value = movieStore.getByCateg(type)

const banner = computed(( ) => {
    if(movieslist.value.length > 0){
        return movieslist.value[0].image;
    }else{
        return '';
    }
});

console.log('====================================');
console.log(movieslist.value);
console.log('====================================');

</script>
<template>
    <AppLayout>
        <div class="hero-types" :style="'background-image: url('+banner+');'">
            <h1 class="text-h2 text-uppercase">
                {{type}}
            </h1>
        </div>
        <v-container class="mt-5">
            <v-row>
                <v-col v-for="movie in movieslist" cols="4" class="text-decoration-none pa-5 cursor-pointer">
                    <v-button variant="link" @click="router.push('/app/movie/'+movie.id)">
                        <div class="movie-wrapper">
                            <v-img aspect-ratio="1.7" :src="movie.image" width="100%" height="100%" cover rounded="lg"></v-img>
                        </div>
                        <h4 class="movie-title text-decoration-none">{{movie.label}}</h4>
                    </v-button>
                </v-col>
            </v-row>
        </v-container>

            
    </AppLayout>
</template>

<style scoped>
.hero-types{
    display: flex;
    align-items: end;
    justify-content: center;
    height: 30vh;
    padding: 50px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 100% auto;
    box-shadow: 0px -55px 100px 0px inset #000000;
}

.movie-title{
    margin-top: 10px;
    text-decoration: none;
    color: #fff;
    /* color: --v-; */
}

</style>