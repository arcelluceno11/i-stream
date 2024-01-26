import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AuthProvider } from 'react-auth-kit'
import { Provider } from 'react-redux'
import { store } from './store'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider authName='_auth' authType='cookie'>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
)
