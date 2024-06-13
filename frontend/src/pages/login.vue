<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import type { AxiosError } from 'axios';

const auth = useAuthStore();

const router = useRouter();

const error = ref("");

const form =  ref(false);
const email =  ref('');
const password =  ref('');
const loading =  ref(false);

const validation = ref({
  required: (value: any) => !!value || "Field is required",
  email: (value: any) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toLowerCase()) || "Invalid email";
  },
});

const onSubmit = async ()=>{
    try {
        let res = await auth.login(email.value,password.value);
        console.log('====================================');
        console.log(res);
        console.log('====================================');
        
      if(res?.role?.alias == 'admin'){
        router.push('/admin')
      }else{
        router.push('/app')
      }
    } catch (err: AxiosError) {
        error.value = err.response.data;
    }

}

</script>

<template>
  <AuthLayout>
    <div class="login-wrapper">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-card class="border-main-color w-100 pa-6">
          <v-card-item>
            <h1 class="text-center mb-6">Login</h1>
            <p class="text-center text-grey mt-1 mb-5">
              if you dont have an account
              <a @click="router.push('/signup')" href="javascript:void(0);"
                >sign up here<v-icon>mdi-chevron-right</v-icon></a
              >
            </p>
            <v-alert
              v-if="error"
              closable
              icon="mdi-close-circle"
              :text="error"
              type="error"
            ></v-alert>
            <v-text-field
              clearable
              label="Email"
              prepend-icon="mdi-email"
              variant="outlined"
              :readonly="loading"
              class="mt-6"
              v-model="email"
              :rules="[validation.required, validation.email]"
            ></v-text-field>
            <v-text-field
              clearable
              label="Password"
              prepend-icon="mdi-lock"
              :readonly="loading"
              variant="outlined"
              class="mt-3"
              v-model="password"
              :rules="[validation.required]"
            ></v-text-field>
          </v-card-item>
          <v-card-actions>
            <v-btn :disabled="!form" :loading="loading" type="submit" block color="main-color" variant="flat"> Login </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </div>
  </AuthLayout>
</template>

<style>
.login-wrapper {
  min-width: 400px;
  max-width: 100%;
}
</style>
