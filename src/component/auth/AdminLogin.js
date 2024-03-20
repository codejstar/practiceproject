import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {

    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const nav=useNavigate()
    const handleForm=(e)=>{
      e.preventDefault() 
      let data={
       email:email, 
       password:pass
      }
      // console.log(data);
      // axios.method(url,body,headers)
      axios.post("https://kizaapi.ksesystem.com/api/user/login",data).then(
        (res)=>{
          console.log(res);
          console.log("token is ", res.data.token);
          if(res.data.success){
            sessionStorage.setItem("token",res.data.token)
            sessionStorage.setItem("email",res.data.data.email)
            sessionStorage.setItem("userId",res.data.data._id)
            toast.success(res.data.message)
            nav("/admin/adminlogin")
          }
          else{
            toast.error(res.data.message)
          }
          //sessionStorage gets removed once the browser is closed, 
          // localStorage works like a permanent storage can keep data stored for many days
          //sessionStorage.setItem("key","value")
          //sessionStorage.getItem("key")
          //sessionStorage.removeItem(key)
          //sessionStorage.clear()
  
        }
      ).catch(
        (err)=>{
          console.log(err);
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
            <h1>Admin Login</h1>
            <div className="mb-3">
              <label htmlFor="adminEmail" className="form-label">Email address</label>
              <input type="email" className="form-control" id="adminEmail" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="adminPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="adminPassword" value={pass} onChange={(e) => setPass(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
    </>
  )
}

export default AdminLogin