import { IonButton, IonContent, IonText } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import MovieCards from '../../../components/MovieCards'
import { Movie, getPopularMovies } from '../../../services/moviesAPI'

type Props = {}

const Home: React.FC = (props: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    getPopularMovies().then(({ results }) => setMovies(results))
  }, [])

  return (
    <IonContent fullscreen>
      <div className='ion-padding flex flex-col'>
        <MovieCards movies={movies} />
      </div>
    </IonContent>
  )
}

export default Home
