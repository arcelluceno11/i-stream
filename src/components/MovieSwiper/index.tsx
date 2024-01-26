import { IonButton, IonImg, IonRippleEffect, IonText } from '@ionic/react'
import React from 'react'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Movie, TVSeries } from '../../services/moviesAPI'

type Props = {
  title: string
  movies: Movie[] | TVSeries[]
  handleViewAllClick?: () => void
}

const MovieSwiper = ({ title, movies, handleViewAllClick }: Props) => {
  return (
    <div className='pt-2 flex flex-col'>
      <div className='flex justify-between items-center'>
        <IonText className='text-md font-mono font-medium'>{title}</IonText>
        <IonButton
          fill='clear'
          size='small'
          className='text-md font-mono font-extralight'
          color='primary'
          onClick={handleViewAllClick}
        >
          View All
        </IonButton>
      </div>
      <div className='pt-2'>
        <Swiper spaceBetween={7.5} slidesPerView={3.5} className='w-full'>
          {movies &&
            movies.map((movie) => (
              <SwiperSlide
                key={movie.id}
                className='ion-activatable ripple-parent rounded-2xl'
              >
                <IonImg
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
                <div className='text-xs font-mono font-extralight'>
                  {(movie as Movie).title || (movie as TVSeries).name}
                </div>
                <IonRippleEffect />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default MovieSwiper
