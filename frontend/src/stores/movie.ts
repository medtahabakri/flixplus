import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore('movies', () => {
  const movies = ref<any>(null);
  const getMovies = async ()=>{
    let res = await axios.get('getMovies');

    movies.value = res.data

    return;

  }

  getMovies();

  const getByCateg = (category:string) =>{
    return movies.value.filter((item:any) => {
      return item.categories.includes(category)
    });
  }
  const getById = (id:number) =>{
    let movie =  movies.value.filter((item:any) => {
      return item.id==id
    });

    return (movie.length > 0?movie[0]:undefined)
  }
  const addMovie = async (mv:any) =>{
    const data = new FormData();
    data.append('title',mv.title);
    data.append('description',mv.description);
    data.append('categories',mv.categories);
    data.append('file',mv.file[0]);
    mv.contents.forEach((element:any) => {
      data.append('contents_labels[]',element.title)
      data.append('contents_files[]',element.file[0])
    });
     
    let res = await axios.post('addMovie',data,{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })

    movies.value.push(mv);
  }
  const editMovie = async (mv:any) =>{
    const data = new FormData();
    data.append('id',mv.id);
    data.append('title',mv.label);
    data.append('description',mv.description);
    data.append('categories',mv.categories);
    mv.contents.forEach((element:any) => {
      data.append('contents_labels[]',element.title)
    });
     
    let res = await axios.post('editMovie',data,{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })

    movies.value.push(mv);
  }
  

  return { movies, getMovies, getByCateg, getById,addMovie,editMovie}
})
