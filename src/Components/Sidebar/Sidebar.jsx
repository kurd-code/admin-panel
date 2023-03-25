import React from 'react'
import './Sidebar.css'
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
                <a href="#" ><AiOutlineHome className='icon'/>  صفحه ی اصلی </a>
            </li>
            <li className='active'>
                <a href="#" > <MdProductionQuantityLimits className='icon'/> محصولات</a>
            </li>
            <li>
                <a href="#"> <BiCommentDetail className='icon'/> کامنت ها</a>
            </li>
            <li>
                <a href="#"> <AiOutlineUser className='icon'/> کاربران</a>
            </li>
            <li>
                <a href="#"> <BiShoppingBag className='icon'/> سفارشات</a>
            </li>
            <li>
                <a href="#"> <BiDollar className='icon'/> تخفیف ها</a>
            </li>
        </ul>
    </div>
  )
}
