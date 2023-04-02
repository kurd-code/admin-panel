import React from 'react'
import './Header.css'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {BsBell} from 'react-icons/bs'

export default function Header() {
  return (
    <div className='header'>
        <div className='header-right'>
            <img className='header-right-profile' src="./soran.JPG" alt="profile" />
            <div className='header-right-text'>
                <h1>سوران غفوری</h1>
                <p>برنامه نویس فرانت اند</p>
            </div>
        </div>
        <div className='header-left'>
            <div className='search-box'>
                <input type="text" placeholder='جست و جو کنید...'/>
                <button>جست و جو</button>
            </div>
            <button><BsFillBrightnessHighFill/></button>
            <button><BsBell/></button>
            
        </div>
    </div>
  )
}
