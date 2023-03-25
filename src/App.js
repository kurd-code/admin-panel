import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import { Route, Routes, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {

  const router = useRoutes(routes)

  return (
    <div className='main'>
        <Sidebar />
      
      <div className='main-right'>
        <Header />

        {router}

      </div>
    </div>
  )
}
