import {
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { Movie, TVSeries, getTrendingMovies } from '../../services/moviesAPI'

type Props = {
  movies: Movie[] | TVSeries[]
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  handleFetch: () => Promise<void>
}

const MovieExplorer = ({ movies, page, setPage, handleFetch }: Props) => {
  const handleOnInfiniteScroll = (ev: any) => {
    handleFetch()
    setTimeout(() => {
      setPage(page + 1)
      ev.target.complete()
    }, 1500)
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
          />
        </div>
      ))}
      <IonInfiniteScroll onIonInfinite={handleOnInfiniteScroll}>
        <IonInfiniteScrollContent />
      </IonInfiniteScroll>
    </div>
  )
}

export default MovieExplorer
