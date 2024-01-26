import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'iStream',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId:
        '565755501635-2fpmhiskcvdsfionb4nfo1ucphpm6j0e.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
}

export default config
