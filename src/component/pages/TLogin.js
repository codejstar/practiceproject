import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const TLogin = () => {
  const nav = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleForm = (e) => {
      e.preventDefault()

      if(email === "admin@getsethire.com" && password === "123" ){
        console.log("valid admin")
        nav("/teacher")
      }else{
        console.log("invalid admin")
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
  </form>
  </div>
  )
}

export default TLogin
