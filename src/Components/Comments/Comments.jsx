import React, { useEffect, useState } from "react";
import "./Comments.css";
import ModalComments from "./ModalComments/ModalComments";
import Modal from "../Modal/Modal";


export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [ShowModal , setShowModal] = useState(false)
  const [showModalComment , setShowModalComment] = useState(false)
  const [idCommentToDelete , setIdCommentToDelete] = useState()
  const [textComment , setTextComment] = useState('')

  function getAllComments(){
    fetch("http://localhost:8000/api/comments/")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }

  useEffect(() => {
    getAllComments()
  }, []);


  function deleteModal(){
    fetch(`http://localhost:8000/api/comments/${idCommentToDelete}`,{
      method:'DELETE'
    }).then(res=>res.json())
      .then(result=>{
        getAllComments()
      })
  }


  return (
    
    <div className="comments">
      {showModalComment && <ModalComments textComment={textComment} setShowModalComment={setShowModalComment}/>}
      {ShowModal && <Modal setShowModal={setShowModal} deleteModal={deleteModal}/>}
      <div className="comments-box">
        <table>
          <thead>
            <tr className="comments-box-tr">
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment) => (
              <tr className="comments-box-tr">
                <th>{comment.userID}</th>
                <th>{comment.productID}</th>
                <th>
                  <button onClick={()=>{setTextComment(comment.body)
                                        setShowModalComment(true)}}>دیدن متن</button>
                </th>
                <th>{comment.date}</th>
                <th>{comment.hour}</th>
                <th>
                  <button onClick={()=>{setShowModal(true)
                                        setIdCommentToDelete(comment.id)}}>حذف</button>
                  {/* <button>ویرایش</button>
                  <button>پاسخ</button>
                  <button>تایید</button> */}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
