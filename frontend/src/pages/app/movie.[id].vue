<script setup lang="ts">
import { useMoviesStore } from '@/stores/movie';
const route = useRoute()
const movieStore = useMoviesStore(); 

const movie = movieStore.getById(route.params?.type||1)
let start = (movie.contents.length > 0?movie.contents[0]:null);
const played_content = ref<any>(start);

const changePlayedContent = (event:any)=>{
    console.log(event)
}

const logchange = ()=>{
    console.log(played_content.value)
}
</script>
<template>
    <AppLayout>
        <div class="player" v-if="played_content">
            <video style="max-height: 80vh;" width="100%" :src="played_content.file" controls />
           
        </div>
        <v-container fluid >
            <v-row>
                <v-col cols="8">
                <h1>{{ movie.label }}</h1>
                <h4>{{ movie.description }}</h4>
                <h3 class="mt-6 mb-2">Tags</h3>
                <div class="d-flex align-center" style="flex-wrap: wrap;gap: 10px;">
                    <v-chip color="main-color" v-for="categ in movie.categories">
                        <span class="text-uppercase">{{categ}}</span>
                    </v-chip>
                </div>
                </v-col>
                <v-col cols="4">
                    <v-list density="compact">
                        <v-list-subheader>Episodes</v-list-subheader>

                        <v-list-item v-for="content in movie.contents"
                            @click="played_content = content"
                            :active="played_content.id == content.id"
                            color="main-color"
                        >
                            <v-list-item-title v-text="content.label"></v-list-item-title>
                        </v-list-item>
                        
                    </v-list>
                </v-col>
            </v-row>
        </v-container>
    </AppLayout>
</template>