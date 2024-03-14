import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './contactregister.css'
import { toast } from 'react-toastify'

const StudentRegister = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const nav = useNavigate()

    const handleForm = (e) => {
            e.preventDefault();

            let data = {
                name: name,
                password: password,
                email: email
            }

            axios.post("https://kizaapi.ksesystem.com/api/user/add",data).then((res)=>{
                if(res.data.success){
                    toast.success(res.data.message)
                    console.log(res.data);
                    nav("/admin/studentregister")
                }
                else{
                    toast.error(res.data.message)
                    console.log(res.data);
                }
            }).catch((err)=>{
                console.log(err);
            })
    }


 

  return (
    <>
        <div className="bg_stu text-white">
        <div className="row">
        <div className="col-3"></div>
        <div className="col-6 m-5">
        <h1>Student Registration Form</h1>
        <form onSubmit={handleForm}>
              <div className="mb-3">
               <label for="exampleInputEmail1" className="form-label">Name</label>
               <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)}/>
             </div>
             <div className="mb-3">
               <label for="exampleInputEmail2" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
             </div>
             <div class="mb-3">
               <label for="exampleInputPassword4" className="form-label">Password</label>
               <input type="password" className="form-control" id="exampleInputPassword4" value={password} onChange={(e) => setPassword(e.target.value)}/>
             </div>
             <button type="submit" className="btn btn-primary sub">Submit</button>
           </form>
        </div>
        <div className="col-3"></div>
        </div>
        </div>
    </>
  )
}

export default StudentRegister