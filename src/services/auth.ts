import { FacebookLogin } from '@capacitor-community/facebook-login'
import { GoogleAuth, User } from '@codetrix-studio/capacitor-google-auth'

export class GoogleAuthService {
  constructor() {
    GoogleAuth.initialize()
  }

  async signIn(): Promise<User> {
    const googleUser = await GoogleAuth.signIn()

    
    return googleUser
  }

  async signOut() {
    await GoogleAuth.signOut()
  }

  async refresh() {
    const googleUser = await GoogleAuth.refresh()
    return googleUser
  }
}

export class FacebookAuthService {
  constructor() {
    FacebookLogin.initialize({ appId: '356164533872177' })
  }

  async signIn() {
    const facebookUser = await FacebookLogin.login({ permissions: ['email'] })
    return facebookUser
  }

  async signOut() {
    await FacebookLogin.logout()
  }
}
