import React from 'react'
import { Outlet } from 'react-router-dom'
import Headermain from './Headermain'
import Footermain from './Footermain'

const AdminMaster = () => {
  return (
    <>
       <Headermain/>
         <Outlet/>
        <Footermain/>
    </>
  )
}

export default AdminMaster