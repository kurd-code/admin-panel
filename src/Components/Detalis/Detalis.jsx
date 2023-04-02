import React from 'react'
import ReactDOM from 'react-dom'
import './Detalis.css'

export default function Detalis({setShowDatalis}) {
  return ReactDOM.createPortal(
    
    <div className='datalis' onClick={()=>setShowDatalis(false)}>
        <div className='datalis-box'>
            <table className='datalis-box-table'>
                <thead  className='datalis-box-table-thead'>
                    
                        <th>اسم</th>
                        <th>قیمت</th>
                        <th>محبوبیت</th>
                    
                </thead>
                <tbody  className='datalis-box-table-tbody'>

                        <th>لپتاپ</th>
                        <th>100000</th>
                        <th>91</th>
                    
                </tbody>
            </table>
        </div>
    </div>,document.getElementById('modal')
  )
}
