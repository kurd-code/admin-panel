import React from 'react'
import './EditModal.css'
import ReactDOM from 'react-dom'

export default function EditModal({setShowEditProduct}) {
  return ReactDOM.createPortal(
    <div className='editmodal'>
        <div className='editmodal-box'>
            <h1>اطلاعات جدید را وارد کنید</h1>
            <input type="text" placeholder='عنوان جدید را وارد کنید'/>
            <input type="text" placeholder='عنوان جدید را وارد کنید'/>
            <input type="text" placeholder='عنوان جدید را وارد کنید'/>
            <input type="text" placeholder='عنوان جدید را وارد کنید'/>
            <button onClick={()=>setShowEditProduct(false)}>ثبت اطلاعات جدید</button>
        </div>
    </div>,document.getElementById('modal')
  )
}
