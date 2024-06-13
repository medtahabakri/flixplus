<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import type { AxiosError } from "axios";
import axios from "axios";

const auth = useAuthStore();

const router = useRouter();

const error = ref("");

const users = ref([]);

const edit_user = ref("");
const first_name = ref("");
const last_name = ref("");
const email = ref("");
const phone = ref("");
const password = ref("");
const confirm_password = ref("");
const loading = ref(false);
const sent = ref(false);

const getUsers = async () => {
  let res = await axios.get('getUsers');

  users.value = res.data

}

const deleteUser = async (user:any) => {
  let res = await axios.post('deleteUser',{
    id: user.id
  });

  getUsers()

}


const editUser = async (user: any) => {

  edit_user.value = user.id;
  first_name.value = user.prenom;
  last_name.value = user.nom;
  email.value = user.email;
  phone.value = user.phone;
  password.value = user.password;
  confirm_password.value = user.password;
  dialog.value = true

}

const onSubmit = async () => {
  loading.value = true;
  try {
    let res = await auth.register({
      edit_user: edit_user.value,
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
      confirm_password: confirm_password.value,
    });
    sent.value = true;
    getUsers()

    edit_user.value = '';
    first_name.value = '';
    last_name.value = '';
    email.value = '';
    phone.value = '';
    password.value = '';
    confirm_password.value = '';
    dialog.value = false
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  } catch (err: AxiosError) {
    error.value = err.response.data;
  }
  loading.value = false;
};

getUsers()

const dialog = ref(false);

</script>
<template>
  <AdminLayout>
    <div style="height: 100vh">
      <v-container fluid>
        <v-row>
          <v-col cols="9">
            <h1>User</h1>
          </v-col>
          <v-col cols="3" class="text-right">
            <v-btn
              rounded="xl"
              variant="flat"
              @click="dialog = true"
              prepend-icon="mdi-plus"
              color="main-color"
            >
              Add User
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-table theme="dark">
              <thead>
                <tr>
                  <th class="text-left">First Name</th>
                  <th class="text-left">Last Name</th>
                  <th class="text-left">Email</th>
                  <th class="text-left">Phone</th>
                  <th class="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                    <tr v-for="user in users">
                        <td>{{user.nom}}</td>
                        <td>{{user.prenom}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.phone}}</td>
                        <td> <v-icon @click="editUser(user)" color="main-color">mdi-pen</v-icon> <v-icon @click="deleteUser(user)" color="red">mdi-delete</v-icon> </td>
                    </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </v-container>

      <v-dialog v-model="dialog" width="50%">
        <v-card class="border-main-color w-100 pa-6">
          <v-card-item>
            <h1 class="text-center mb-6">Add User</h1>
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
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    clearable
                    label="Last Name"
                    :readonly="loading"
                    variant="outlined"
                    v-model="last_name"
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
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field
                    clearable
                    label="Telephone"
                    :readonly="loading"
                    variant="outlined"
                    v-model="phone"
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
          <template v-slot:actions>
            <v-btn class="ms-auto" text="Cancel" @click="dialog = false"></v-btn>
            <v-btn
              :loading="loading"
              type="submit"
              color="main-color"
              variant="flat"
              @click="onSubmit()"
            >
              Save
            </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </AdminLayout>
</template>
