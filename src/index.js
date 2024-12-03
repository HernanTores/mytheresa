import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { MyListProvider } from './context/MyListContext'
import { LoadingProvider } from './context/LoadingContext'

const root = createRoot(document.getElementById('root'))
root.render(
  <LoadingProvider>
    <MyListProvider>
      <App />
    </MyListProvider>
  </LoadingProvider>
)
