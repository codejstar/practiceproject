import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify';
import { ClipLoader } from 'react-spinners';

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [load , setLoad] = useState(false)
  const nav = useNavigate()

  const handleForm = (e) => {
      e.preventDefault()
    

      if(email === "jagdeepjakhu@gmail.com" && password === "2024" ){
        console.log("valid user")
        nav("/")
      }else{
        console.log("invalid user");
        toast.error("Invalid user");
        setTimeout(() => {setLoad(false)},2000)
      }
  }

  return (
    <div className="container py-5">
    <form className='py-5' onSubmit={handleForm}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleInputPassword1"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary mx-2">
      Submit
    </button>
    <ClipLoader />
  </form>
  </div>
  )
}

export default Login
