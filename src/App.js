import React from 'react'
// import { Container } from 'react-bootstrap'
import Header from './components/Header'
// import Sidebar from './components/Sidebar'
// import { Stack } from 'react-bootstrap'
// import Posts from './components/Posts'
// import Main from './components/Main'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FeedPage from './pages/FeedPage'
import ExplorePage from './pages/ExplorePage'
import LoginPage from './pages/LoginPage'
import UserPage from './pages/UserPage'
import ApiProvider from './contexts/ApiProvider'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ApiProvider>
          <Header />
          <Routes>
            <Route path='/' element={<FeedPage />} />
            <Route path='/explore' element={<ExplorePage />} />
            <Route path='/user/:username' element={<UserPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </ApiProvider>
      </BrowserRouter>
    </div>
  )
}

export default App