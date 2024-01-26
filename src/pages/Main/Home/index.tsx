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
import React, { useState } from 'react'
import { useSignOut } from 'react-auth-kit'
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth'

type Props = {}

const Home: React.FC = (props: Props) => {
  return <IonContent>Home</IonContent>
}

export default Home
