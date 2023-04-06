import React, { useEffect, useState } from 'react'
import './EditModal.css'
import ReactDOM from 'react-dom'

export default function EditModal({setShowEditProduct , mainProductEdit , getAllProducts}) {

  const [newtitle ,setNewtitle ] = useState('')
  const [newprice ,setNewprice ] = useState('')
  const [newcount ,setNewcount ] = useState('')
  const [newaddresImg ,setNewaddresImg ] = useState('')
  const [newcolor ,setNewcolor ] = useState('')
  const [newsale ,setNewsale ] = useState('')
  const [newpapularity ,setNewpapularity ] = useState('')

  
  useEffect(()=>{
    setNewtitle(mainProductEdit.title)
    setNewprice(mainProductEdit.price)
    setNewcount(mainProductEdit.count)
    setNewcolor(mainProductEdit.colors)
    setNewaddresImg(mainProductEdit.img)
    setNewpapularity(mainProductEdit.popularity)
    setNewsale(mainProductEdit.sale)
  },[])
  


    function handEdit(){
      const productNewInfo={
        id:mainProductEdit.id,
        title: newtitle,
        price: newprice,
        count: newcount,
        img: newaddresImg,
        popularity: newpapularity,
        sale: newsale,
        colors: newcolor,
      }

      fetch(`http://localhost:8000/api/products/${mainProductEdit.id}`,{
        method:'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(productNewInfo)
      }).then(res=>res.json())
      .then(result=>{
        console.log(result);
        getAllProducts()
      })


    }
  

  return ReactDOM.createPortal(
    <div className='editmodal'>
        <div className='editmodal-box'>
            <h1>اطلاعات جدید را وارد کنید</h1>
            <input onChange={(event)=> setNewtitle(event.target.value)} type="text" placeholder='عنوان جدید را وارد کنید' value={newtitle}/>
            <input onChange={(event)=> setNewprice(event.target.value)} type="text" placeholder='قیمت جدید را وارد کنید' value={newprice}/>
            <input onChange={(event)=> setNewcount(event.target.value)} type="text" placeholder='موجودی جدید را وارد کنید' value={newcount}/>
            <input onChange={(event)=> setNewaddresImg(event.target.value)} type="text" placeholder='ادرس کاور جدید را وارد کنید' value={newaddresImg}/>
            <input onChange={(event)=> setNewcolor(event.target.value)} type="text" placeholder='تعداد رنگ بندی جدید را وارد کنید' value={newcolor}/>
            <input onChange={(event)=> setNewpapularity(event.target.value)} type="text" placeholder='میزان محبوبیت جدید را وارد کنید' value={newpapularity}/> 
            <input onChange={(event)=> setNewsale(event.target.value)} type="text" placeholder='میزان فروش جدید را وارد کنید' value={newsale}/>
            <button onClick={()=>{setShowEditProduct(false)
                                  handEdit()
                                  }}>ثبت اطلاعات جدید</button>
        </div>
    </div>,document.getElementById('modal')
  )
}
