import { IonButton, IonContent } from '@ionic/react'
import React from 'react'
import { FacebookAuthService, GoogleAuthService } from '../../services/auth'
import { useSignOut } from 'react-auth-kit'

type Props = {}

const More: React.FC = (props: Props) => {
  const googleAuth = new GoogleAuthService()
  const facebookAuth = new FacebookAuthService()
  const signOut = useSignOut()

  const handleSignOut = () => {
    googleAuth.signOut()
    facebookAuth.signOut()
    signOut()
  }

  return (
    <IonContent>
      <IonButton onClick={handleSignOut}>Sign Out</IonButton>
    </IonContent>
  )
}

export default More
