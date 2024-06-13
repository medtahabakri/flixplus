<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import type { AxiosError } from "axios";

const auth = useAuthStore();

const router = useRouter();

const error = ref("");

const form = ref(false);
const first_name = ref("");
const last_name = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirm_password = ref("");
const loading = ref(false);
const sent = ref(false);

const validation = ref({
  required: (value: any) => !!value || "Field is required",
  email: (value: any) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.toLowerCase()) || "Invalid email";
  },
});

const onSubmit = async () => {
  loading.value = true;
  try {
    let res = await auth.register({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      confirm_password: confirm_password.value,
    });
    sent.value = true;
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  } catch (err: AxiosError) {
    error.value = err.response.data;
  }
  loading.value = false;
};
</script>

<template>
  <AuthLayout>
    <div class="signup-wrapper">
      <v-form v-if="!sent" v-model="form" @submit.prevent="onSubmit">
        <v-card class="border-main-color w-100 pa-6">
          <v-card-item>
            <h1 class="text-center mb-6">Sign up</h1>
            <p class="text-center text-grey mt-1 mb-5">
              if you already have an account
              <a @click="router.push('/login')" href="javascript:void(0);"
                >login here<v-icon>mdi-chevron-right</v-icon></a
              >
            </p>
            <v-alert
              v-if="error"
              closable
              icon="mdi-close-circle"
              :text="error"
              type="error"
            ></v-alert>
            <v-container fluid>
              <v-row align="center">
                <v-col>
                  <v-text-field
                    clearable
                    label="First Name"
                    variant="outlined"
                    :readonly="loading"
                    v-model="first_name"
                    :rules="[validation.required]"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    clearable
                    label="Last Name"
                    :readonly="loading"
                    variant="outlined"
                    v-model="last_name"
                    :rules="[validation.required]"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col>
                  <v-text-field
                    clearable
                    label="Email"
                    variant="outlined"
                    :readonly="loading"
                    v-model="email"
                    :rules="[validation.required, validation.email]"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    clearable
                    label="Telephone"
                    :readonly="loading"
                    variant="outlined"
                    v-model="phone"
                    :rules="[validation.required]"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col>
                  <v-text-field
                    clearable
                    label="Password"
                    type="password"
                    variant="outlined"
                    :readonly="loading"
                    v-model="password"
                    :rules="[validation.required]"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    clearable
                    label="Confirm Password"
                    type="password"
                    :readonly="loading"
                    variant="outlined"
                    v-model="confirm_password"
                    :rules="[validation.required]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-item>
          <v-card-actions>
            <v-btn
              :disabled="!form"
              :loading="loading"
              type="submit"
              block
              color="main-color"
              variant="flat"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
      <v-card v-else class="border-main-color w-100 pa-6">
        <v-card-item class="text-center">
          <v-icon color="success" class="checkmark-signed-up mb-5"
            >mdi-check-circle</v-icon
          >
          <h2>You successfully signed in</h2>
          <v-container class="mt-7" fluid>
            <v-row align="center">
              <v-col>
                <v-btn @click="router.push('/')" block variant="outlined" size="x-large" rounded="xl" color="main-color">return to home</v-btn>
              </v-col>
              <v-col>
                <v-btn @click="router.push('/login')" block variant="flat" size="x-large" rounded="xl" color="main-color">Login</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-item>
      </v-card>
    </div>
  </AuthLayout>
</template>

<style>
.signup-wrapper {
  width: 600px;
  max-width: 100%;
}

.checkmark-signed-up {
  font-size: 6em;
}
</style>
