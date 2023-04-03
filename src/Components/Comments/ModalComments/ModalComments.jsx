import React from 'react'
import './ModalComments.css'
import ReactDOM from 'react-dom'

export default function ModalComments({textComment , setShowModalComment}) {
  return ReactDOM.createPortal(
    <div className='ModalComments'  >
        <div className='ModalComments-box' >
            <h1>{textComment}</h1>
            <button className='ModalComments-box-button' onClick={()=>{setShowModalComment(false)}}>بستن</button>
        </div>
    </div>
    ,document.getElementById('modal')
  )
}
