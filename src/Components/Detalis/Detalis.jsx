import React from 'react'
import ReactDOM from 'react-dom'
import './Detalis.css'

export default function Detalis({setShowDatalis , mainProductInfo}) {
  return ReactDOM.createPortal(
    
    <div className='datalis' onClick={()=>setShowDatalis(false)}>
        <div className='datalis-box'>
            <table className='datalis-box-table'>
                <thead  className='datalis-box-table-thead'>
                    
                        <th>فروش</th>
                        <th>رنگ بندی</th>
                        <th>محبوبیت</th>
                    
                </thead>
                <tbody  className='datalis-box-table-tbody'>
                        <th>{mainProductInfo.sale}</th>
                        <th>{mainProductInfo.colors}</th>
                        <th>{mainProductInfo.popularity}</th>
                    
                </tbody>
            </table>
        </div>
    </div>,document.getElementById('modal')
  )
}
