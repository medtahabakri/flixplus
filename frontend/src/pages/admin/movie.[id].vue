<script setup lang="ts">
import { useMoviesStore } from '@/stores/movie';
import { useCategoriesStore } from "@/stores/category";
const route = useRoute()
const movieStore = useMoviesStore(); 
const categoriesStore = useCategoriesStore();

const movie = movieStore.getById(route.params?.type||1)


const changeMovie = () => {
    movieStore.editMovie(movie);
}
</script>
<template>
    <AdminLayout>
        <v-container fluid >
            <v-row>
                <v-col cols="10">
                    <h2>Edit Movie {{ movie.label }}</h2>
                </v-col>
                <v-col cols="2" class="text-right">
                    <v-btn @click="changeMovie()" rounded="xl" variant="flat" prepend-icon="mdi-content-save" color="main-color">
                        Save
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="8">
                    <v-container fluid >
                        <v-row>
                            <v-col cols="12">
                                <v-file-input label="Movie Cover"
                                v-model="movie.image"
                                ></v-file-input>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    v-model="movie.label"
                                    label="Title"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea label="Description"
                                v-model="movie.description"
                                ></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-select
                                    :items="categoriesStore.categories"
                                    item-title="label"
                                    item-value="alias"
                                    label="Chips"
                                    chips
                                    multiple
                                v-model="movie.categories"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col cols="4">
                    
                    <v-container fluid >
                        <v-row v-for="content in movie.contents">
                            <v-col cols="12">
                                <v-text-field
                                    readonly
                                    v-model="content.label"
                                    label="Title"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-file-input label="Movie Cover"
                                v-model="content.file"
                                ></v-file-input>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>
    </AdminLayout>
</template>