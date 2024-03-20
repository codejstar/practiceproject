import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddSubCat = () => {
   
    const [allCategory,setAllCategory]=useState([])
    const [categoryId,setCategoryId]=useState("")
    const [name, setName] = useState();
    const [image, setImage] = useState({});
    const [imageName, setImageName] = useState("");

    useEffect(()=>{
      axios.post("https://kizaapi.ksesystem.com/api/category/all").then((res)=>{
           console.log(res);
           setAllCategory(res.data.data)
       }).catch((err)=>{
           console.log(err);
       })
   },[])

    const changeImage = (e) => {
      setImageName(e.target.value)
      setImage(e.target.files[0])
    }

    const handleForm = (e) => {
       e.preventDefault();

       let obj={
        Authorization:sessionStorage.getItem("token")
    }

    console.log(obj);

      let data = new FormData()
      data.append("name",name)
      data.append("subcategory_image",image)
      data.append("categoryId",categoryId)
      axios.post("https://kizaapi.ksesystem.com/api/subcategory/add",data,{headers: obj}).then((res)=>{
            console.log(res);
        })
      .catch((err) => {
        console.log(err);
      })
    }

  return (
    <>
         <div className="bg_login p-5 text-white">
   <div className="row">
   <div className="col-4"></div>
   <div className="col-4">
   <form onSubmit={handleForm}>
            <label>Category</label>
            <select value={categoryId} onChange={(e)=>{setCategoryId(e.target.value)}}>
                <option>Choose category</option>
                {allCategory.map((el,index)=>(
                    <option value={el._id}>{el.name}</option>
                ))}
            </select>
            {categoryId}
            <br/>
            <label>Sub-cat Name</label>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br/>
            <label>Image</label>
            <input type="file" value={imageName} onChange={changeImage}/>
            <br/>
            <button>Submit</button>
        </form>
   </div>
   <div className="col-4"></div>
   </div>
   </div>
    </>
  )
}

export default AddSubCat