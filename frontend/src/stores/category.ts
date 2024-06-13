import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<any[]>([]);
  const getCategories = async ()=>{
    categories.value = [];

    let res = await axios.get('getCategories');

    categories.value = res.data;
    console.log('=====================categories.value===============');
    console.log(categories);
    console.log('====================================');
    // categories.value = [
    //   {id:1,alias:'action',label:'Action'},
    //   {id:2,alias:'drama',label:'Drama'},
    //   {id:3,alias:'comedy',label:'Comedy'},
    //   {id:4,alias:'horror',label:'Horror'},
    //   {id:5,alias:'animated',label:'Animated'},
    //   {id:6,alias:'account',label:'Account'}
    // ];

    return categories.value;

  }

  getCategories();

  const getById = (id:number) =>{
    let category =  categories.value.filter((item:any) => {
      return item.id==id;
    });
    return (category.length > 0?category[0]:undefined);
  }

  const getByAlias = (alias:string) =>{
    let category =  categories.value.filter((item:any) => {
      return item.alias==alias;
    });
    return (category.length > 0?category[0]:undefined);
  }
  
  const addCategory = async (mv:any) =>{
    let res = await axios.post('addCategory',mv)
    await getCategories();
    return res.data;
  }
  
  const removeCategory = async (id:number) =>{
    let res = await axios.post('deleteCategory',{id:id})
    await getCategories();
    return res.data;
  }
  
  const editCategory = async (category:any) =>{
    let res = await axios.post('editCategory',category)
    // await getCategories();
    return res.data;
  }
  

  return { categories, getCategories, getById, getByAlias, addCategory, removeCategory, editCategory}
})
