import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './contactregister.css'

const LoginForm = () => {

   const nav = useNavigate();
   const [email,setEmail] = useState("")
   const [pass,setPass] = useState("")

   const handleForm = (e) => {
       e.preventDefault();

       const data = {
          email : email,
          password : pass
       }

       axios.post('https://kizaapi.ksesystem.com/api/user/login',data)
       .then((res) => {
        if(res.data.success){
            toast.success(res.data.message)
            console.log(res.data);
            nav("/admin/stulogin")
        }
        else{
            toast.error(res.data.message)
            console.log(res.data);
        }

       }).catch((err) => {
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
        <h1>Login Form</h1>
             <div className="mb-3">
               <label for="exampleInputEmail2" className="form-label">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
             </div>
             <div class="mb-3">
               <label for="exampleInputPassword4" className="form-label">Password</label>
               <input type="password" className="form-control" id="exampleInputPassword4" value={pass} onChange={(e) => setPass(e.target.value)}/>
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

export default LoginForm