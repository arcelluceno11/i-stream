import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { personCircle, search } from 'ionicons/icons'
import React, { useState } from 'react'
import { useIsAuthenticated, useSignOut } from 'react-auth-kit'
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'

type Props = {}

const Home: React.FC = (props: Props) => {
  const signOut = useSignOut()

  const isAuthenticated = useIsAuthenticated()

  console.log(isAuthenticated())

  const [showModal, setShowModal] = useState<boolean>(false)

  const handleShowModal = () => setShowModal(!showModal)

  const handleSignOut = () => {
    GoogleAuth.signOut()
      .then(() => {
        signOut()
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>The Doxies</IonTitle>
          <IonButtons slot='secondary'>
            <IonButton onClick={handleShowModal}>
              <IonIcon slot='icon-only' icon={search}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot='icon-only' icon={personCircle}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonModal isOpen={showModal}>
        <IonHeader>
          <IonToolbar>
            <IonSearchbar
              showCancelButton='always'
              onIonCancel={handleShowModal}
            />
          </IonToolbar>
        </IonHeader>
      </IonModal>
      <IonContent>
        <IonButton onClick={handleSignOut}>Sign Out</IonButton>
      </IonContent>
    </>
  )
}

export default Home
