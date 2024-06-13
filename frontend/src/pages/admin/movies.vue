<script setup lang="ts">
import { useCategoriesStore } from "@/stores/category";
import { useMoviesStore } from "@/stores/movie";
const router = useRouter();
const movieStore = useMoviesStore();
const categoriesStore = useCategoriesStore();

const dialog = ref(false);

const nmovie = ref({
    file: undefined,
    title: '',
    description: '',
    categories: [],
    contents: [],
});
const addmovie = ()=>{
    movieStore.addMovie(nmovie.value);
    // nmovie.value = {
    //     file: undefined,
    //     title: '',
    //     description: '',
    //     categories: [],
    //     contents: [],
    // }
    // dialog.value = false
}
</script>
<template>
  <AdminLayout>
    <div class="" style="height: 100vh">
      <v-container fluid>
        <v-row>
          <v-col cols="9">
            <h1>Movies</h1>
          </v-col>
          <v-col cols="3" class="text-right">
            <v-btn rounded="xl" variant="flat" @click="dialog = true" prepend-icon="mdi-plus" color="main-color">
              Add Movie
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="movie in movieStore.movies"
            cols="4"
            class="text-decoration-none pa-5 cursor-pointer"
          >
            <v-button variant="link" @click="router.push('/admin/movie/' + movie.id)">
              <div class="movie-wrapper">
                <v-img
                  aspect-ratio="1.7"
                  :src="movie.image"
                  width="100%"
                  height="100%"
                  cover
                  rounded="lg"
                ></v-img>
              </div>
              <h4 class="movie-title text-decoration-none">{{ movie.label }}</h4>
            </v-button>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
        <v-card>
          <v-toolbar>
            <v-btn icon="mdi-close" @click="dialog = false"></v-btn>

            <v-toolbar-title>Add Movie</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items>
              <v-btn @click="addmovie()" text="Save" variant="text"></v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <v-container>
            <v-row>
                <v-col cols="12">
                    <v-file-input label="Movie Cover"
                    v-model="nmovie.file"
                    ></v-file-input>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                
                    <v-text-field
                    v-model="nmovie.title"
                        label="Title"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-textarea label="Description"
                    v-model="nmovie.description"
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-select
                        :items="categoriesStore.categories"
                        item-title="label"
                        item-value="alias"
                        label="Chips"
                        chips
                        multiple
                    v-model="nmovie.categories"
                    ></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <div class="d-flex align-center">
                        Content
                        <v-btn @click="nmovie.contents.push({title: '',file: undefined})" icon="mdi-plus" color="main-color" size="small" class="ms-10"></v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row v-for="content in nmovie.contents">
                <v-col cols="6">
                    <v-text-field
                        label="Title"
                        v-model="content.title"
                    ></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-file-input 
                    label="file"
                    v-model="content.file"
                    ></v-file-input>
                </v-col>
            </v-row>
          </v-container>
          
        </v-card>
      </v-dialog>
    </div>
  </AdminLayout>
</template>
