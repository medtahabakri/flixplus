import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const token = useStorage('token','')
  const user = ref<any>(null);

  async function login(email: String,password: String) {
    let res = await axios.post('login',{
      email: email,
      password: password,
    })
    token.value = res.data.token;
    user.value = res.data.user;

    return user.value;

  }

  async function register(data :any) {
    let res = await axios.post('register',data)
    return res;
  }
  
  if (token.value){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.value
    getUser()
  }

  watch(token, async (newtoken, oldtoken) => {
    if(newtoken){
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + newtoken
      getUser()
    }else{
      logout()
    }
  })

  const loading = ref(true)

  const isLoggedIn = computed(() => (token.value !== undefined && token.value !== ''))

  function setUser(newUser: any) {
    user.value = newUser
  }

  function setToken(newToken: string) {
    token.value = newToken
    console.log(newToken)
  }

  function setLoading(newLoading: boolean) {
    loading.value = newLoading
  }

  function logout() {
    token.value = '' 
    user.value = null;
    router.push('/')
  }

  async function getUser() {
    let res = await axios.get('getAuth')
    user.value = res.data.user;
  }

  function getUserHome() {
    
    switch (user.value.role.alias) {
      case 'admin':
        return '/admin'
        
        break;
      case 'viewer':
        return '/app'
        break;
    
      default:
        return '/'
        break;
    }
  }

  async function editUser(data: any){
    let res = await axios.post('editUser',data)
    getUser()
    return res;
  }

  return { token, user, isLoggedIn, login, register, logout, setUser, setToken, getUserHome, editUser }
})
