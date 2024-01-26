import { IonContent } from '@ionic/react'
import React, { useState } from 'react'
import { TVSeries as typeTV, getTVSeries } from '../../../services/moviesAPI'
import MovieExplorer from '../../../components/MovieExplorer'

type Props = {}

const TVSeries: React.FC = (props: Props) => {
  const [page, setPage] = useState<number>(1)
  const [movies, setMovies] = useState<typeTV[]>([])

  const fetchMovies = async () => {
    getTVSeries(page).then(({ results }) => {
      setMovies([...movies, ...results])
    })
  }

  return (
    <IonContent>
      <MovieExplorer handleFetch={fetchMovies} movies={movies} page={page} setPage={setPage} />
    </IonContent>
  ) 
}

export default TVSeries
