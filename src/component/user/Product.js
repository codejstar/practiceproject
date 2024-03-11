import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Product = () => {

   const [data, setData] = useState([])

    useEffect(() => {

      axios.post("https://kizaapi.ksesystem.com/api/product/all")
        .then((res) => {
            console.log(res.data.data);
            setData(res.data.data);
        })
        .catch((error) => console.error(error))

    },[]);

  return (
    <>
  <div className="row">
    <div className="col-3"></div>
    <div className="col-6">
        <h2 className='mt-5'>Select Product</h2>
            <select class="form-select" aria-label="Default select example">
                 <option selected disabled>Open this select menu</option>
        {
          data.map(
            (elem,index) => (
                 <option value={elem.name} key={index}>{elem.name}</option>
            )
          )
        }
            </select>
    </div>
    <div className="col-3"></div>
  </div>

    </>
  )
}

export default Product