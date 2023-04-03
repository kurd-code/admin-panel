import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

export default function Modal({ setShowModal, deleteModal}) {
  const closeModal = () => {
    setShowModal(false);
  };
  function okdeleteModal(){
    deleteModal()
  }


  return ReactDOM.createPortal(
    <div className="modal" onClick={closeModal}>
      <div className="modal-delete">
        <h1>ایا از حذف اطمینان دارید؟</h1>
        <div className="modal-delete-button-box">
          <button className="modal-delete-button-ok" onClick={okdeleteModal}>
            بله
          </button>
          <button className="modal-delete-button-no">خیر</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
