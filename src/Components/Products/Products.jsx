import React, { useState } from "react";
import "./Products.css";
import Modal from "../Modal/Modal";
import Datalis from '../Detalis/Detalis'
import EditModal from '../EditModal/EditModal'

export default function Products() {
  const [showModal, setShowModal] = useState(false);
  const [showDatalis, setShowDatalis] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false)

  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal}/>}
      {showEditProduct && <EditModal setShowEditProduct={setShowEditProduct}/>}
      {showDatalis && <Datalis setShowDatalis={setShowDatalis}/>}
      <h1 className="products-title">افزودن محصول جدید</h1>
      <div className="products">
        <div className="box-added-product">
          <div className="box-added-product-input">
            <input
              className="box-added-product-input-"
              type="text"
              placeholder="اسم محصول"
            />
            <input
              className="box-added-product-input-"
              type="text"
              placeholder="موجودی محصول"
            />
            <input
              className="box-added-product-input-"
              type="text"
              placeholder="قیمت محصول"
            />
            <input
              className="box-added-product-input-"
              type="text"
              placeholder="ادرس عکس محصول"
            />
            <input
              className="box-added-product-input-"
              type="text"
              placeholder="میزان محبوبیت محصول"
            />
            <input
              className="box-added-product-input-"
              type="text"
              placeholder="میزان فروش محصول"
            />
            <input
              className="box-added-product-input-"
              type="text"
              placeholder="تعداد رنگ بندی محصول"
            />
          </div>
          <button className="box-added-product-button"> ثبت محصول </button>
        </div>
        <div className="show-products">
          <table className="show-products-table">
            <tr className="ttt">
              <th>عکس</th>
              <th>اسم</th>
              <th>قیمت</th>
              <th>موجودی</th>
              <th></th>
            </tr>

            <tr className="table-tr">
              <td>
                <img className="eee" src="./soran.JPG" alt="" />
              </td>

              <td>هندزفری بلوتوسی</td>
              <td>٢٠٠٠٠تومان</td>
              <td>١٣٤</td>
              <td>
                <button className="table-tr-button" onClick={()=>setShowDatalis(true)}>جزئیات</button>
                <button className="table-tr-button" onClick={()=>setShowModal(true)}>حذف</button>
                <button className="table-tr-button" onClick={()=>setShowEditProduct(true)}>ویرایش</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
