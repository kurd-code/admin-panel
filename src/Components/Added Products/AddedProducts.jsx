import React, { useState } from "react";
import "./AddedProducts.css";



export default function AddedProducts({allProducts}) {

const [addNewProductsName , setAddNewProductsName] = useState('')
const [addNewProductsCount , setAddNewProductsCount] = useState('')
const [addNewProductsPrice , setAddNewProductsPrice] = useState('')
const [addNewProductsAddres , setAddNewProductsAddres] = useState('')
const [addNewProductsPopularity , setAddNewProductsPopularity] = useState('')
const [addNewProductsColor , setAddNewProductsColor] = useState('')
const [addNewProductsSale , setAddNewProductsSale] = useState('')


function addNewProduct(){
    const newProduct={
        title: addNewProductsName,
        price: addNewProductsPrice,
        count: addNewProductsCount,
        img: addNewProductsAddres,
        popularity: addNewProductsPopularity,
        sale: addNewProductsSale,
        colors: addNewProductsColor,
    }
    fetch(`http://localhost:8000/api/products`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newProduct)
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
    })
    
}


  return (
    <>
      <div className="box-added-product">
        <div className="box-added-product-input">
          <input
            className="box-added-product-input-"
            type="text"
            placeholder="اسم محصول"
            onChange={(event)=>setAddNewProductsName(event.target.value)}
          />
          <input
            className="box-added-product-input-"
            type="text"
            placeholder="موجودی محصول"
            onChange={(event)=>setAddNewProductsCount(event.target.value)}
          />
          <input
            className="box-added-product-input-"
            type="text"
            placeholder="قیمت محصول"
            onChange={(event)=>setAddNewProductsPrice(event.target.value)}
          />
          <input
            className="box-added-product-input-"
            type="text"
            placeholder="ادرس عکس محصول"
            onChange={(event)=>setAddNewProductsAddres(event.target.value)}
          />
          <input
            className="box-added-product-input-"
            type="text"
            placeholder="میزان محبوبیت محصول"
            onChange={(event)=>setAddNewProductsPopularity(event.target.value)}
          />
          <input
            className="box-added-product-input-"
            type="text"
            placeholder="میزان فروش محصول"
            onChange={(event)=>setAddNewProductsSale(event.target.value)}
          />
          <input
            className="box-added-product-input-"
            type="text"
            placeholder="تعداد رنگ بندی محصول"
            onChange={(event)=>setAddNewProductsColor(event.target.value)}
          />
        </div>
        <button className="box-added-product-button" onClick={()=>{addNewProduct()}}> ثبت محصول </button>
      </div>
    </>
  );
}
