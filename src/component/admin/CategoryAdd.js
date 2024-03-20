import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';

const CategoryAdd = () => {

    const [name, setName] = useState("");
    const [image, setImage] = useState({});
    const [imageName, setImageName] = useState("");

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

        let data=new FormData()
        data.append("name",name)
        data.append("category_image",image)
        // console.log(data);
        axios.post("https://kizaapi.ksesystem.com/api/category/add",data,{headers:obj}).then(
            (res)=>{
                console.log(res);
                if(res.data.success === true){
                    toast.success(res.data.message)
                }
                else{
                    toast.error(res.data.message)
                }
            }
        ).catch(
            (err)=>{
                console.log(err);
                toast.error("Something went wrong!! Try again later")
            }
        ) 
       
    }


  return (
    <>
    <div className="bg_login p-5 text-white">
   <div className="row">
   <div className="col-4"></div>
   <div className="col-4">
   <form onSubmit={handleForm}>
   <h1>Category Add</h1>
        <div className="mb-3">
          <label for="exampleInputEmail2" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword4" className="form-label">Image</label>
          <input type="file" className="form-control" id="exampleInputPassword4" value={imageName} onChange={changeImage}/>
        </div>

         <button type="submit" className="btn btn-primary sub">Submit</button>
      </form>
   </div>
   <div className="col-4"></div>
   </div>
   </div>
</>
  )
}

export default CategoryAdd