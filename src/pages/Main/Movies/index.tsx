import { IonContent } from '@ionic/react'
import React, { useState } from 'react'
import MovieExplorer from '../../../components/MovieExplorer'
import { Movie, getTrendingMovies } from '../../../services/moviesAPI'

type Props = {}

const Movies: React.FC = (props: Props) => {
  const [page, setPage] = useState<number>(1)
  const [movies, setMovies] = useState<Movie[]>([])

  const fetchMovies = async () => {
    getTrendingMovies(page).then(({ results }) => {
      setMovies([...movies, ...results])
    })
  }

  return (
    <IonContent>
      <MovieExplorer handleFetch={fetchMovies} movies={movies} page={page} setPage={setPage} />
    </IonContent>
  ) 
}

export default Movies
