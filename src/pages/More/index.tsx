import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'
import { FacebookAuthService, GoogleAuthService } from '../../services/auth'
import { useAuthUser, useSignOut } from 'react-auth-kit'

type Props = {}

const More: React.FC = (props: Props) => {
  const googleAuth = new GoogleAuthService()
  const facebookAuth = new FacebookAuthService()
  const signOut = useSignOut()
  const auth = useAuthUser()

  const handleSignOut = () => {
    googleAuth.signOut()
    facebookAuth.signOut()
    signOut()
  }
  
  return (
    <>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>
            <h1 className='text-2xl font-mono font-medium'>More</h1>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='ion-padding flex flex-col justify-between h-full w-full'>
          <div className='h-3/5'>
            <div className='h-1/5 flex'>
              <div className='w-2/3 ion-padding'>
                <IonText color='primary'>
                  <h1 className='text-2xl font-mono font-medium '>{auth()?.name}</h1>
                </IonText>
                <IonText>
                  <h1 className='text-xl font-mono font-medium '>{auth()?.email}</h1>
                </IonText>
              </div>
              <div className='w-1/3 h-full flex justify-center items-center'>
                <IonAvatar>
                  <img
                    alt="Silhouette of a person's head"
                    src={auth()?.imageUrl}
                  />
                </IonAvatar>
              </div>
            </div>
          </div>
          <div className='w-full ion-padding self-end'>
            <IonButton
              color='danger'
              fill='outline'
              expand='block'
              onClick={handleSignOut}
            >
              Sign Out
            </IonButton>
          </div>
        </div>
      </IonContent>
    </>
  )
}

export default More
