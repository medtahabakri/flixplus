<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import type { AxiosError } from "axios";

const auth = useAuthStore();

const router = useRouter();

const error = ref("");

const form = ref(false);
const first_name = ref(auth.user.prenom);
const last_name = ref(auth.user.nom);
const email = ref(auth.user.email);
const phone = ref(auth.user.phone);
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
    await auth.editUser({
      user_id: auth.user.id,
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      confirm_password: confirm_password.value,
    })
    sent.value = true;
};

const handleLogout = async () => {
    auth.logout();
};
</script>
<template>
    <AppLayout>
        <div class="d-flex align-center justify-center" style="height: 100vh; flex-wrap: wrap;">
            <v-form v-if="!sent" v-model="form" @submit.prevent="onSubmit" class="w-50">
                <v-card class="border-main-color w-100 pa-6">
                <v-card-item>
                    <h1 class="text-center mb-6">Edit Profile</h1>
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
                    edit
                    </v-btn>
                </v-card-actions>
                </v-card>
            </v-form>
                    
            <v-card v-else class="border-main-color w-100 pa-6 w-50" >
                <v-card-item class="text-center">
                <v-icon color="success" class="checkmark-signed-up mb-5"
                    >mdi-check-circle</v-icon
                >
                <h2>You successfully changed informations</h2>
                <v-container class="mt-7" fluid>
                    <v-row align="center">
                    </v-row>
                </v-container>
                </v-card-item>
            </v-card>
            <div class="w-100">
                <v-btn
                block
                color="danger"
                variant="text"
                @click="handleLogout()"
                >
                Log Out
                </v-btn>
            </div>
        </div>
        
        
    </AppLayout>
</template>