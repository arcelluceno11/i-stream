import { IonContent, IonHeader, IonModal, IonSearchbar, IonToolbar } from '@ionic/react'
import React from 'react'

type Props = {
  showModal: boolean
  handleShowModal: () => void
}

const SearchModal = ({ showModal, handleShowModal }: Props) => {
  return (
    <IonModal isOpen={showModal}>
      <IonHeader>
        <IonToolbar>
          <IonSearchbar
            showCancelButton='always'
            onIonCancel={handleShowModal}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        data here
      </IonContent>
    </IonModal>
  )
}

export default SearchModal
