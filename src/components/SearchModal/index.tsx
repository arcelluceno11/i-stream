import {
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonList,
  IonListHeader,
  IonModal,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react'
import { useEffect, useState } from 'react'
import {
  Movie,
  TVSeries,
  searchAll,
  searchMovies,
  searchTVSeries,
} from '../../services/moviesAPI'
import { useHistory } from 'react-router'

type Props = {
  showModal: boolean
  handleShowModal: () => void
}

const SearchModal = ({ showModal, handleShowModal }: Props) => {
  const { location } = useHistory()

  const [movies, setMovies] = useState<Movie[] | TVSeries[]>([])

  const fetch = (query: string) => {
    if (location.pathname === '/movies') {
      searchMovies(query).then(({ results }) => {
        setMovies(results)
      })
    } else if (location.pathname === '/tvseries') {
      searchTVSeries(query).then(({ results }) => {
        setMovies(results)
      })
    } else {
      searchAll(query).then(({ results }) => {
        setMovies(results)
      })
    }
  }

  useEffect(() => {
    fetch('')
  }, [])

  return (
    <IonModal isOpen={showModal}>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonSearchbar
            showCancelButton='always'
            onIonCancel={handleShowModal}
            onIonInput={(e) => fetch(e.detail.value || '')}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='h-full w-full'>
          <IonList className='w-full'>
            {movies.length > 0 && (
              <IonListHeader className='text-center font-mono font-extrabold'>
                Search Results
              </IonListHeader>
            )}
            {movies.map((movie) => (
              <IonItem key={movie.id} className='p-2 w-full'>
                <IonImg
                  className='w-2/5'
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
                <div className='w-3/5 text-md font-mono font-medium text-center'>
                  {(movie as Movie).title || (movie as TVSeries).name}
                </div>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonModal>
  )
}

export default SearchModal
