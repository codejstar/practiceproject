import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {

   const [data, setData] = useState([])
   const [search, setSearch] = useState("")

    const searchText = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

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
  <div className="searchbar">
     <h2>Search Product</h2>
     <input type="text" value={search} onChange={searchText}/>
  </div>
<div className="row mt-5">
    {
  data.map( 
    (elem,index) => (
    <div className="col-3 mb-4">
    <div className="card" style={{width:"18rem"}} key={index}>
      <img src={"https://kizaapi.ksesystem.com/" + elem.image} className="card-img-top" alt="imageNotFound"/>
             <div className="card-body">
               <h5 className="card-title">{elem.name}</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <Link to={"#"} className="btn btn-primary">Go somewhere</Link>
             </div>
         </div>
    </div>
    )
  )
    }
</div>

         {/* {
            data.map(
                (elem,index) => (
                    <h1 key={index}>{index+1}{elem.name}</h1>
                )
            )
          } */}
    </>
  )
}

export default Product