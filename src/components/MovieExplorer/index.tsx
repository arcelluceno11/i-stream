import {
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Movie, TVSeries, getTrendingMovies } from '../../services/moviesAPI'
import MovieModal from '../MovieModal'

type Props = {
  movies: Movie[] | TVSeries[]
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  handleFetch: () => Promise<void>
}

const MovieExplorer = ({ movies, page, setPage, handleFetch }: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [movieId, setMovieId] = useState<number>()

  const handleOnInfiniteScroll = (ev: any) => {
    handleFetch()
    setTimeout(() => {
      setPage(page + 1)
      ev.target.complete()
    }, 1500)
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const handleOnClick = (movieId: number) => {
    setMovieId(movieId)
    setShowModal(true)
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div className='flex h-full flex-wrap'>
      {movies.map((movie) => (
        <div key={movie.id} className='p-1 w-1/3 h-1/4'>
          <IonImg
            className='w-full h-full rounded-2xl'
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            onClick={() => handleOnClick(Number(movie.id))}
          />
        </div>
      ))}
      <IonInfiniteScroll onIonInfinite={handleOnInfiniteScroll}>
        <IonInfiniteScrollContent />
      </IonInfiniteScroll>
      <MovieModal
        movieId={movieId}
        showModal={showModal}
        handleShowModal={handleShowModal}
      />
    </div>
  )
}

export default MovieExplorer
