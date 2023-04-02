import React from 'react'
import './Modal.css'
import ReactDOM from 'react-dom'


export default function Modal({setShowModal}) {
    const sss =()=>{
        setShowModal(false)
    }
    
    

  return ReactDOM.createPortal (
    
    <div className='modal' onClick={sss}>
        <div className='modal-delete'>
            <h1>ایا از حذف اطمینان دارید؟</h1>
            <div className='modal-delete-button-box'>
                <button className='modal-delete-button-ok' onClick={sss} >بله</button>
                <button  className='modal-delete-button-no' onClick={sss}>خیر</button>
            </div>
        </div>
    </div>,document.getElementById('modal')
    
    
  )
}
