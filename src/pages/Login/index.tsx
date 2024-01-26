import { IonButton, IonIcon, IonText } from '@ionic/react'
import React, { useEffect } from 'react'
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import { Redirect } from 'react-router'
import { logoFacebook, logoGoogle } from 'ionicons/icons'
import { Capacitor, Plugins } from '@capacitor/core'
import { GoogleAuthService } from '../../services/auth'

type Props = {}

const Login: React.FC = (props: Props) => {
  const googleAuth = new GoogleAuthService()
  const isAuthenticated = useIsAuthenticated()
  const signIn = useSignIn()

  const handleGoogleLogin = () => {
    googleAuth.signIn().then((result) => {
      signIn({
        token: result.authentication.accessToken,
        tokenType: 'Bearer',
        expiresIn: 120,
      })
    })
  }

  const handleFacebookLogin = () => {}

  const handleExit = () => {
    if (Capacitor.isNativePlatform()) {
      let ans = window.confirm('Are you sure?')
      if (ans) {
        Plugins.App.exitApp()
      }
    }
  }

  if (isAuthenticated()) {
    return <Redirect to='/home' />
  }

  return (
    <div className='ion-padding h-screen w-screen flex flex-col justify-end'>
      <div className='flex flex-col justify-end gap-4'>
        <div className='flex flex-col justify-between gap-4'>
          <IonText className='text-5xl font-mono'>iStream</IonText>
          <IonText className='text-lg font-mono font-extralight'>
            Watch movies and TV shows online in HD on any device
          </IonText>
        </div>
        <div className='h-1/2 flex flex-col mt-4 gap-1'>
          <IonButton
            expand='block'
            onClick={handleFacebookLogin}
            color='primary'
          >
            <IonIcon
              slot='start'
              icon={logoFacebook}
              className='mr-4'
            ></IonIcon>
            Continue with Facebook
          </IonButton>
          <IonButton expand='block' color='dark' onClick={handleGoogleLogin}>
            <IonIcon slot='start' icon={logoGoogle} className='mr-4'></IonIcon>
            Continue with Google
          </IonButton>
          <IonButton expand='block' color='light' onClick={handleExit}>
            Exit
          </IonButton>
        </div>
      </div>
    </div>
  )
}

export default Login
