import React, { useEffect, useState } from "react";
import "./Products.css";
import Modal from "../Modal/Modal";
import Datalis from '../Detalis/Detalis'
import EditModal from '../EditModal/EditModal'
import AddedProducts from "../Added Products/AddedProducts";

export default function Products() {
  const [showModal, setShowModal] = useState(false);
  const [showDatalis, setShowDatalis] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [allProducts , setAllProducts]=useState([]);
  const [idProductDelete , setIdProductDelete] = useState()
  const [mainProductInfo , setMainProductInfo] = useState({})
  const [mainProductEdit , setMainProductEdit] = useState({})


  function getAllProducts(){
    fetch("http://localhost:8000/api/products/")
    .then((res)=>res.json())
    .then((products)=>setAllProducts(products))
  }

  useEffect(()=>{
    getAllProducts()
  },[])
  useEffect(()=>{
    getAllProducts()
  },[showEditProduct])

  function deleteModal(){
    console.log("ok")
    fetch(`http://localhost:8000/api/products/${idProductDelete}`,{
      method:'DELETE'
    }).then(res=>res.json())
      .then(result=>{
        getAllProducts()
      })
  }


  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal} deleteModal={deleteModal}/>}
      {showEditProduct && <EditModal setShowEditProduct={setShowEditProduct} mainProductEdit={mainProductEdit}/>}
      {showDatalis && <Datalis setShowDatalis={setShowDatalis} mainProductInfo={mainProductInfo} getAllProducts={getAllProducts}/>}
      <h1 className="products-title">افزودن محصول جدید</h1>
      <div className="products">
        <AddedProducts allProducts={allProducts}/>
        <div className="show-products">
        <table className="show-products-table">
              <tr className="ttt">
                <th>عکس</th>
                <th>اسم</th>
                <th>قیمت</th>
                <th>موجودی</th>
                <th></th>
              </tr>


          {allProducts.map((product)=>(
            

            

              <tr className="table-tr">
                <td>
                  <img className="eee" src={product.img} alt="" />
                </td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.count}</td>
                <td>
                  <button className="table-tr-button" onClick={()=>{setShowDatalis(true)
                                                                    setMainProductInfo(product)}}>جزئیات</button>
                  <button className="table-tr-button" onClick={()=>{setShowModal(true) 
                                                                    setIdProductDelete(product.id)}}>حذف</button>
                  <button className="table-tr-button" onClick={()=>{setShowEditProduct(true) 
                                                                    setMainProductEdit(product)}}>ویرایش</button>
                </td>
              </tr>
           

          ))}
           </table>
        </div>
      </div>
    </div>
  );
}
