<script setup lang="ts">
import { useCategoriesStore } from "@/stores/category";
import axios from "axios";

const categorieStore = useCategoriesStore();

const categories = categorieStore.categories;

const dialog = ref(false)
const input = ref('')

const popindex = async (index:number)=>{
    await categorieStore.removeCategory(index)
}

const addCategory = async ()=>{
    categorieStore.addCategory({label: input.value})
    input.value = ''
    dialog.value = false
}

const editCategory = async (category: any)=>{
    categorieStore.editCategory({id: category.id,label: category.label})
    category.editing = false
}


</script>
    
<template>
  <AdminLayout>
    <div class="" style="height: 100vh">
      <v-container fluid>
        <v-row>
            <v-col cols="9">
                <h1>Categories</h1>
            </v-col>
            <v-col cols="3" class="text-right">
                <v-btn rounded="xl" variant="flat" prepend-icon="mdi-plus" @click="dialog=true" color="main-color"> Add category </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(category,index) in categorieStore.categories" cols="3">
                <v-card>
                    <v-card-item>
                    <div>
                        <div  v-if="!category.editing" class="text-overline mb-1">
                            {{ category.label }}
                        </div>
                        <div v-else>
                            <v-text-field
                            v-model="category.label"
                        ></v-text-field>
                        </div>
                    </div>
                    </v-card-item>

                    <v-card-actions class="text-right">
                    <v-btn v-if="!category.editing" @click="category.editing = true" color="primary" class="ms-auto">
                        Edit
                    </v-btn>
                    <v-btn v-if="category.editing" @click="editCategory(category)" color="green" class="ms-auto">
                        Save
                    </v-btn>
                    <v-btn v-if="!category.editing" @click="popindex(category.id)" color="red">
                        Delete
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
      </v-container>

      <v-dialog
        v-model="dialog"
        width="auto"
        >
        <v-card
            max-width="400"
            title="Add category"
        >
            <v-card-item>
            <div>
                <v-text-field
                    v-model="input"
                ></v-text-field>
            </div>
            </v-card-item>
            <template v-slot:actions>
            <v-btn
                class="ms-auto"
                text="Cancel"
                @click="dialog=false"
            ></v-btn>
            <v-btn
                class="ms-auto"
                text="Ok"
                @click="addCategory()"
            ></v-btn>
            </template>
        </v-card>
        </v-dialog>
    </div>
  </AdminLayout>
</template>
