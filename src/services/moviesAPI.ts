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
    `${import.meta.env.VITE_MOVIE_URL}/popular?language=en-US&page=1`,
    options
  )

  return res.json()
}

export const getTrendingMovies = async (page: number) => {
  const res = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/now_playing?language=en-US&page=${page}`,
    options
  )

  return res.json()
}

export const getTopRatedMovies = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_MOVIE_URL}/top_rated?language=en-US&page=1`,
    options
  )

  return res.json()
}

export const getTVSeries = async (page: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
    options
  )

  return res.json()
}
