import React, { useEffect, useState } from "react";
import './Users.css'
import Modal from '../Modal/Modal'
import EditModalUsers from  './EditModal/EditModalUsers'
import UserDatalis from "./UserDatalis/UserDatalis";

export default function Users() {
  const [showModal,setShowModal] = useState(false)
  const [showModalEdit,setShowModalEdit] = useState(false)
  const [showModalDatalis,setShowModalDatalis] = useState(false)
  const [allUsers , setAllUsers] = useState([])
  const [idUserToDelete, setIdUserToDelete] = useState()
  const [userToEdit, setUserToEdit] = useState()

  function getAllUsers(){
    fetch("http://localhost:8000/api/users/")
      .then((res) => res.json())
      .then((users) => setAllUsers(users));
  }

  function deleteModal (){
    fetch(`http://localhost:8000/api/users/${idUserToDelete}`,{
      method:'DELETE'
    }).then(res=>res.json())
      .then(result=>{
        getAllUsers()
      })
      console.log("id delete" , idUserToDelete)
      console.log("all" , allUsers)
  }


  useEffect(() => {
    getAllUsers()
    console.log(allUsers)
  }, []);

  return (
    <div className="list-users">
      {showModal && <Modal deleteModal={deleteModal} setShowModal={setShowModal} />}
      {showModalEdit &&  <EditModalUsers userToEdit={userToEdit} setShowModalEdit={setShowModalEdit} getAllUsers={getAllUsers}/>}
      {showModalDatalis &&  <UserDatalis user={userToEdit} setShowModalDatalis={setShowModalDatalis} />}
      <div className="list-users-box">
        <table>
          <thead>
            <tr className="list-users-box-tr">
              <th>نام و نام خانوادگی</th>
              <th>یوزرنیم</th>
              <th>رمز عبور</th>
              <th>ایمیل</th>
              <th>شماره تماس</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map(user=>(
              <tr className="list-users-box-tr">
              <th>{user.firsname} , {user.lastname}</th>
              <th>{user.username}</th>
              <th>{user.password}</th>
              <th>{user.email}</th>
              <th>{user.phone}</th>
              <th>
                <button onClick={()=>{setShowModal(true)
                                      setIdUserToDelete(user.id)}}>حذف</button>
                <button onClick={()=>{setUserToEdit(user)
                                      setShowModalDatalis(true)}}>جزئیات</button>
                <button onClick={()=>{setShowModalEdit(true)
                                      setUserToEdit(user)}}>ویرایش</button>
              </th>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
