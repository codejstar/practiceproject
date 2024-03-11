import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Subcategory = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        
       axios.post('https://kizaapi.ksesystem.com/api/subcategory/all')
       .then(
        (res) => {
            setData(res.data.data)
        } 
            )
       .catch((err) => console.log(err))

    },[])

  return (
    <>
    <h1 className='text-center'>SubCategory</h1>
    <div className="container mx-auto">

<table border= "2px" align='center' width="500px">
  <thead>
    <tr  className='text-center'>
      <th S>Sno</th>
      <th >Name</th>
      <th >img</th>
    </tr>
  </thead>
  <tbody className='text-center'>
  {
    data.map(
         (elem, index) => (
          <tr >
           <td key={index}>{index+1}</td>
           <td > {elem.name}</td>
           <td ><img src={"https://kizaapi.ksesystem.com/" + elem.image} alt={'imageNotFound'} style={{height:"100px", objectFit:'cover'}}/></td>
          </tr>
         )
    )
}
  </tbody>
</table>
   </div>
    </>
  )
}

export default Subcategory