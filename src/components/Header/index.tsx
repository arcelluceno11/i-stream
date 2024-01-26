import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { search } from 'ionicons/icons'
import React, { useState } from 'react'
import SearchModal from '../SearchModal'

type Props = {}

const Header: React.FC = (props: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleShowModal = () => setShowModal(!showModal)

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            iStream
            </IonTitle>
          <IonButtons slot='secondary'>
            <IonButton onClick={handleShowModal}>
              <IonIcon slot='icon-only' icon={search}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <SearchModal showModal={showModal} handleShowModal={handleShowModal} />
    </>
  )
}

export default Header
