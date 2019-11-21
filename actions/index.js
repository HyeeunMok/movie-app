
import axios from 'axios'

const MOVIE_DATA = []

const CATEGORY_DATA = [
  {id: 'c-1', name: 'drama'},
  {id: 'c-2', name: 'action'},
  {id: 'c-3', name: 'adventure'},
  {id: 'c-4', name: 'historical'},
]

// 1. getCategories function
// 2. get categories in index page
// 3. provide categories to sidemenu
// 4. in sidemenu iterate categories and display them

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA)
      // reject('Cannot fetch data!')
    }, 50)
  })
}

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIE_DATA)
      // reject('Cannot fetch data!')
      }, 50)
    })
}

export const createMovie = (movie) => {
  return new Promise((resolve, reject) => {

    movie.id = Math.random().toString(36).substr(2, 7)
    MOVIE_DATA.push(movie)
    setTimeout(() => {
      resolve(MOVIE_DATA)
      // reject('Cannot fetch data!')
      }, 50)
    })
}

export const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const movieIndex = MOVIE_DATA.findIndex(m => m.id === id)
    const movie = MOVIE_DATA[movieIndex]
    setTimeout(() => resolve(movie), 50)
  })
}