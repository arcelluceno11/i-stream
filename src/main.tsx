import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AuthProvider } from 'react-auth-kit'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <AuthProvider authName='_auth' authType='cookie'>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
