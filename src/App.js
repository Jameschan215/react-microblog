import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Stack } from 'react-bootstrap'
import Posts from './components/Posts'
import Main from './components/Main'


const App = () => {
  return (
    <div>
      <Header />
      <Main showSidebar={true}>
        <Posts />
      </Main>
    </div>
  )
}

export default App