export interface Movie {
  id: string
  title: string
  overview: string
  poster_path: string
  release_date: string
  original_language: string
  vote_average: string
}

export interface TVSeries {
  id: string
  name: string
  overview: string
  poster_path: string
  original_language: string
  vote_average: string
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_MOVIES_API_KEY}`,
  },
}

export const getPopularMovies = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/movie/popular?language=en-US&page=1`,
    options
  )

  return res.json()
}

export const getTrendingMovies = async (page: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/movie/now_playing?language=en-US&page=${page}`,
    options
  )

  return res.json()
}

export const getTopRatedMovies = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/movie/top_rated?language=en-US&page=1`,
    options
  )

  return res.json()
}

export const getTVSeries = async (page: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/tv/popular?language=en-US&page=${page}`,
    options
  )

  return res.json()
}

export const searchAll = async (query: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/search/multi?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  )

  return res.json()
}

export const searchTVSeries = async (query: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  )

  return res.json()
}

export const searchMovies = async (query: string) => {
  const res = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  )

  return res.json()
}
