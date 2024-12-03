import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/pagination'
import './styles/_variables.scss'
import './styles/main.scss'

import HomePage from './pages/HomePage/HomePage'
import ItemDetailPage from './pages/ItemDetailPage/ItemDetailPage'
import MyListPage from './pages/MyListPage/MyListPage'

const App = () => {
  const routes = [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/:category/:id',
      element: <ItemDetailPage />
    },
    {
      path: '/my-list',
      element: <MyListPage />
    },
    {
      path: '*',
      element: <Navigate to='/' />
    }
  ]
  return (
    <>
      <Router>
        <Routes>
          {
            routes.map(route => {
              return <Route path={route.path} element={route.element} key={route.path} />
            })
          }
        </Routes>
      </Router>
    </>
  )
}

export default App
