import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {BiCommentDetail} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import {BiDollar} from 'react-icons/bi'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <h1 className="sidebar-title">به داشبورد خود خوش امدید</h1>

        <ul className='sidebar-links'>
            
            <li>
               <a href="#"><AiOutlineHome className='icon'/>  صفحه ی اصلی </a>
            </li>
            
            
            <li className='active'>
                <Link to='/products'>
                <MdProductionQuantityLimits className='icon'/> محصولات
                </Link>
                
            </li>
            <li>
                <Link to='/comments'>
                <BiCommentDetail className='icon'/> کامنت ها
                </Link>
                
            </li>
            <li>
                <Link to='/users'>
                <AiOutlineUser className='icon'/> کاربران
                </Link>
                
            </li>
            <li>
                <Link to='/orders'>
                <BiShoppingBag className='icon'/> سفارشات
                </Link>
                
            </li>
            <li>
                <Link to='/offs'>
                <BiDollar className='icon'/> تخفیف ها
                </Link>
                
            </li>
        </ul>
    </div>
  )
}
