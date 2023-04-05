import React from 'react'
import ReactDOM from 'react-dom'
import './UserDatalis.css'

export default function UserDatalis({user , setShowModalDatalis}) {
  return ReactDOM.createPortal(
    <div className='userdatalis' onClick={()=>{setShowModalDatalis(false)}}>
        <div className='userdatalis-box'>
            <table className='userdatalis-box-table'>
                <thead>
                    <tr>
                        <th>نام</th>
                        <th>نام خانوادگی</th>
                        <th>یوزرنیم</th>
                        <th>پسوورد</th>
                        <th>شماره تلفن</th>
                        <th>شهر</th>
                        <th>ایمیل</th>
                        <th>ادرس</th>
                        <th>امتیاز</th>
                        <th>خرید</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.firsname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.phone}</td>
                        <td>{user.city}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.score}</td>
                        <td>{user.buy}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    ,document.getElementById('modal')
  )
}
