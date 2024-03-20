import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AddProduct = () => {

    const [name,setName] = useState();

    const [categoryId, setCategoryId] = useState("");
    const [subcategoryId, setSubcategoryId] = useState("");
   
    const [allCategory , setAllCategoryIds] = useState([]);
    const [allSubCategory, setAllSubCategoryId] = useState([]);
   
    const [imageName, setImageName] = useState();
    const [image, setImage] = useState({});
    const [price, setPrice] = useState("");

    useEffect(() => {
        axios.post("https://kizaapi.ksesystem.com/api/category/all").then((res) => {
            console.log(res);
            setAllCategoryIds(res.data.data);
        }).catch((err) => {
            console.log(err);
        });

        axios.post("https://kizaapi.ksesystem.com/api/subcategory/all").then((res) => {
            console.log(res);
            setAllSubCategoryId(res.data.data); 
        }).catch((err) => {
            console.log(err);
        });

    },[]);

    const changeImage = (e) => {
      setImageName(e.target.value)
      setImage(e.target.files[0])
      console.log(e.target.value)
      console.log(e.target.files[0])
      console.log(e)
    }

    const handleForm = (e) => {
        e.preventDefault();

       let obj = {
        Authorization: sessionStorage.getItem("token")
       }
       
    //    console.log(obj)

       let data = new FormData()
       data.append("name",name)
       console.log(name)
       data.append("product_image", image)
       console.log(image)
       data.append("categoryId",categoryId)
       console.log(categoryId)
       data.append("subcategoryId",subcategoryId)
       console.log(subcategoryId)
       data.append("price",price)
       console.log(price)

       axios.post("https://kizaapi.ksesystem.com/api/product/add",data,{headers: obj}).then((res) => {
           console.log(res)
       }).catch((err) => {
        console.log(err)
       })

    }

  return (
    <>
          <div className="bg_login p-5 text-white">
   <div className="row">
   <div className="col-4"></div>
   <div className="col-4">
   <form onSubmit={handleForm}>
           
            <label>Product Name</label>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br/>

            <label>Product Image</label>
            <input type="file" value={imageName} onChange={changeImage}/>
            <br/>

            <label>Category</label>
            <select value={categoryId} onChange={(e)=>{setCategoryId(e.target.value)}}>
                <option>Choose category</option>
                {
                    allCategory.map((el,index)=>(
                    <option value={el._id} key={index}>{el.name}</option>
                ))
                }

            </select>
            {categoryId}
            <br />

            <label>Sub-Category</label>
            <select value={subcategoryId} onChange={(e)=>{setSubcategoryId(e.target.value)}}>
                <option>Choose sub-category</option>
                {allSubCategory.map((el,index)=>(
                    <option value={el._id} key={index}>{el.name}</option>
                ))}
            </select>
            {subcategoryId}
            <br/>

            <label>Price</label>
            <input type="text" value={price} onChange={(e) => {setPrice(e.target.value)}} />
            
            <button>Submit</button>
        </form>
   </div>
   <div className="col-4"></div>
   </div>
   </div>
    </>
  )
}

export default AddProduct