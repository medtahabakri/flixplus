<script setup lang="ts">
import { useMoviesStore } from '@/stores/movie';
const router = useRouter();

</script>
<template>
    <AdminLayout>
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
        
    </AdminLayout>
</template>