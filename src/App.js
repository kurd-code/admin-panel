import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'


export default function App() {
  return (
    <div className='main'>
        <Sidebar />
      
      <div className='main-right'>
        <Header />
      </div>
    </div>
  )
}
