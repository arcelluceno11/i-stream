import { IonButton, IonContent, IonText } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import MovieCards from '../../../components/MovieCards'
import {
  Movie,
  TVSeries,
  getPopularMovies,
  getTVSeries,
  getTopRatedMovies,
  getTrendingMovies,
} from '../../../services/moviesAPI'
import MovieSwiper from '../../../components/MovieSwiper'
import { useHistory } from 'react-router'

type Props = {}

const Home: React.FC = (props: Props) => {
  const history = useHistory()

  const [popularMovies, setPopularMovies] = useState<Movie[]>([])
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<TVSeries[]>([])
  const [tvSeries, setTVSeries] = useState<Movie[]>([])

  const handleViewAllMovieClick = () => {
    history.push('/movies')
  }

  const handleViewAllTVSeriesClick = () => {
    history.push('/tvseries')
  }

  useEffect(() => {
    getPopularMovies().then(({ results }) => setPopularMovies(results))
    getTrendingMovies(1).then(({ results }) => setTrendingMovies(results))
    getTVSeries(1).then(({ results }) => setTVSeries(results))
    getTopRatedMovies().then(({ results }) => setTopRatedMovies(results))
  }, [])

  return (
    <IonContent fullscreen>
      <div className='ion-padding flex flex-col'>
        <MovieCards movies={popularMovies} />
        <MovieSwiper
          title='Trending'
          movies={trendingMovies.slice(0, 10)}
          handleViewAllClick={handleViewAllMovieClick}
        />
        <MovieSwiper title='TV Series' movies={tvSeries.slice(0, 10)}  handleViewAllClick={handleViewAllTVSeriesClick}/>
        <MovieSwiper title='Top Rated' movies={topRatedMovies.slice(0, 10)} handleViewAllClick={handleViewAllMovieClick}/>
      </div>
    </IonContent>
  )
}

export default Home
