import React, { useEffect, useState } from "react";
import "./EditModalUsers.css";
import ReactDOM from "react-dom";

export default function EditModalUsers({ userToEdit , setShowModalEdit , getAllUsers}) {
  const [editUserfirsname, setEditUserfirsname] = useState("");
  const [editUserlastname, setEditUserlastname] = useState("");
  const [editUserusername, setEditUserusername] = useState("");
  const [editUserpassword, setEditUserpassword] = useState("");
  const [editUserphone, setEditUserphone] = useState("");
  const [editUsercity, setEditUsercity] = useState("");
  const [editUseremail, setEditUseremail] = useState("");
  const [editUseraddress, setEditUseraddress] = useState("");
  const [editUserscore, setEditUserscore] = useState("");
  const [editUserbuy, setEditUserbuy] = useState("");

  useEffect(() => {
    setEditUserfirsname(userToEdit.firsname);
    setEditUserlastname(userToEdit.lastname);
    setEditUserusername(userToEdit.username);
    setEditUserpassword(userToEdit.password);
    setEditUserphone(userToEdit.phone);
    setEditUsercity(userToEdit.city);
    setEditUseremail(userToEdit.email);
    setEditUseraddress(userToEdit.address);
    setEditUserscore(userToEdit.score);
    setEditUserbuy(userToEdit.buy);
  }, []);

  function HandUserEdit() {
   const userEdit={
    firsname: editUserfirsname,
    lastname : editUserlastname,
    username : editUserusername,
    password : editUserpassword,
    phone : editUserphone,
    city : editUsercity,
    email : editUseremail,
    address : editUseraddress,
    score : editUserscore,
    buy : editUserbuy,
   }
   const id=userToEdit.id;

   fetch(`http://localhost:8000/api/users/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(userEdit)
      }).then(res=>res.json())
      .then(result=>{
        console.log(result);
        getAllUsers()
      })

  }

  return ReactDOM.createPortal(
    <div className="editmodalusers">
      <div className="editmodalusers-box">
        <input
          type="text"
          placeholder="  نام جدید را وارد کنید"
          value={editUserfirsname}
          onChange={(event) => {
            setEditUserfirsname(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="  نام خانوادگی جدید را وارد کنید"
          value={editUserlastname}
          onChange={(event) => {
            setEditUserlastname(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="  یوزرنیم جدید را وارد کنید"
          value={editUserusername}
          onChange={(event) => {
            setEditUserusername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="  پسوورد جدید را وارد کنید"
          value={editUserpassword}
          onChange={(event) => {
            setEditUserpassword(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="  شماره تلفن جدید را وارد کنید"
          value={editUserphone}
          onChange={(event) => {
            setEditUserphone(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="  شهر جدید را وارد کنید"
          value={editUsercity}
          onChange={(event) => {
            setEditUsercity(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="  ایمیل جدید را وارد کنید"
          value={editUseremail}
          onChange={(event) => {
            setEditUseremail(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="  ادرس عکس جدید را وارد کنید"
          value={editUseraddress}
          onChange={(event) => {
            setEditUseraddress(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="  امتیاز جدید را وارد کنید"
          value={editUserscore}
          onChange={(event) => {
            setEditUserscore(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="  خریدهای جدید را وارد کنید"
          value={editUserbuy}
          onChange={(event) => {
            setEditUserbuy(event.target.value);
          }}
        />
        <button onClick={() => {HandUserEdit()
                                setShowModalEdit(false)}}>ثبت اطلاعات جدید</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
