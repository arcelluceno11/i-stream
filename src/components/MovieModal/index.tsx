import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { chevronBack, star } from 'ionicons/icons'
import { useEffect, useState } from 'react'
import { Movie, getMovieDetails } from '../../services/moviesAPI'

type Props = {
  movieId: number | undefined
  showModal: boolean
  handleShowModal?: () => void
}

const MovieModal = ({ movieId, showModal, handleShowModal }: Props) => {
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    getMovieDetails(movieId).then((movie) => setMovie(movie))
  }, [movieId])

  return (
    <IonModal isOpen={showModal}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonIcon
              icon={chevronBack}
              size='large'
              onClick={handleShowModal}
            />
          </IonButtons>
          <IonTitle>Movie Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='h-full w-full flex flex-col'>
          <div
            className='absolute h-1/3 w-full bg-cover'
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            }}
          />
          <div className='flex h-1/3 w-full z-50'>
            <div className='flex self-end w-full h-1/2'>
              <div className='p-1 flex justify-center h-full w-1/3'>
                <IonImg
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                />
              </div>
              <div className='ion-padding h-full w-2/3'>
                <IonText className='font-mono text-white font-medium text-2xl'>
                  {movie?.title}
                </IonText>
                <div className='pt-2 flex items-center gap-2'>
                  <IonIcon icon={star} color='primary' />
                  <IonText className='font-mono text-white font-medium text-xl'>
                    {movie?.vote_average}
                  </IonText>
                  <br />
                  <IonText className='flex flex-wrap font-mono text-white font-medium text-sm'>
                    {movie?.genres?.map((genre) => (
                      <span key={genre.id}>{genre.name} </span>
                    ))}
                  </IonText>
                </div>
              </div>
            </div>
          </div>
          <div className='ion-padding'>
            <div className='flex flex-col gap-5 h-1/3 w-full z-50'>
              <div className='flex h-1/2 w-full'>
                <div className='flex flex-col w-1/2 h-full'>
                  <div className='flex items-center justify-center h-full w-full'>
                    <IonText
                      className='font-mono font-medium text-xl'
                      color='primary'
                    >
                      Release Date
                    </IonText>
                  </div>
                </div>
                <div className='flex flex-col w-1/2 h-full'>
                  <div className='flex items-center justify-center h-full w-full'>
                    <IonText className='font-mono text-white font-medium text-xl'>
                      {movie?.release_date}
                    </IonText>
                  </div>
                </div>
              </div>
              <div className='flex h-1/2 w-full'>
                <div className='flex flex-col w-1/2 h-full'>
                  <div className='flex items-center justify-center h-full w-full'>
                    <IonText
                      className='font-mono font-medium text-xl'
                      color='primary'
                    >
                      Status
                    </IonText>
                  </div>
                </div>
                <div className='flex flex-col w-1/2 h-full'>
                  <div className='flex items-center justify-center h-full w-full'>
                    <IonText className='font-mono text-white font-medium text-xl'>
                      {movie?.status}
                    </IonText>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 flex flex-col gap-6'>
            <IonText className='font-mono font-medium text-4xl' color='primary'>
              Overview
            </IonText>
            <IonText className='font-mono text-white font-medium text-xl'>
              {movie?.overview.slice(0, 400)}
            </IonText>
          </div>
        </div>
      </IonContent>
    </IonModal>
  )
}

export default MovieModal
