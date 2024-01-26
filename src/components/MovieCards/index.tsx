import React, { useState } from 'react'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonLoading,
  IonText,
} from '@ionic/react'
import { Movie } from '../../services/moviesAPI'
import { play } from 'ionicons/icons'

type Props = {
  movies: Movie[]
}

const MovieCards = ({ movies }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleOnSlideChange = (e: any) => {
    setActiveIndex(e.activeIndex)
  }

  if (!movies) return <IonLoading isOpen={true} />

  return (
    <div className='ion-padding flex flex-col'>
      <Swiper
        effect='cards'
        autoplay={true}
        modules={[EffectCards]}
        onSlideChange={handleOnSlideChange}
        className='w-56'
      >
        {movies &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id} className='rounded-lg'>
              <IonImg
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className='ion-padding'>
        <div className='ion-padding text-2xl text-center font-semibold'>
          <IonText color='dark'>
            {(movies && movies[activeIndex]?.title) || ''}
          </IonText>
        </div>
        <div className='flex justify-center text-sm text-center'>
          <IonText color='dark'>
            {movies && movies[activeIndex]?.release_date}
          </IonText>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col justify-center items-center'>
          <IonText color='dark'>Rating</IonText>
          <strong>{movies && movies[activeIndex]?.vote_average}</strong>
        </div>
        <IonButton fill='solid' size='large'>
          <IonIcon slot='start' icon={play}></IonIcon>
          Watch Now
        </IonButton>
        <div className='flex flex-col justify-center items-center'>
          <IonText color='dark'>Lang</IonText>
          <strong className='ion-text-uppercase'>
            {movies && movies[activeIndex]?.original_language}
          </strong>
        </div>
      </div>
    </div>
  )
}

export default MovieCards
