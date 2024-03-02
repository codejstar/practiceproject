import React from 'react'
import THeader from './THeader'
import { Outlet } from 'react-router-dom'
import TFooter from './TFooter'

const Teacher = () => {
  return (
    <>
       <THeader/>
       <Outlet/>
       <TFooter/>
    </>
  )
}

export default Teacher