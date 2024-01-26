import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, Authentication } from '@codetrix-studio/capacitor-google-auth'

const initialState = {
  user: {
    authentication: {
      accessToken: '',
      idToken: '',
      refreshToken: '',
    } as Authentication,
    email: '',
    name: '',
    id: '',
    imageUrl: '',
    familyName: '',
    givenName: '',
    serverAuthCode: '',
  } as User,
}

export const googleAuthSlice = createSlice({
  name: 'GoogleAuth',
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    deleteUser: (state) => {
      state = initialState
    },
  },
})

export const { saveUser, deleteUser } = googleAuthSlice.actions

export default googleAuthSlice.reducer
