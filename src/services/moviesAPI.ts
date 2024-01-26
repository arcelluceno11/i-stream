export interface Movie {
  id: string
  title: string
  overview: string
  poster_path: string
  release_date: string
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
