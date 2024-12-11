import { useState,useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import useFetchComponent from "./useFetch";

function CategoryDetails() {
  const{
    params: {value},
  }=useMatch('/:value')
  const val=value
  console.log(val)
  const link=`https://fakestoreapi.com/products/category/${val}`

  const[data]=useFetchComponent(link)
  const His=useNavigate()
  const HandleSubmit=(id)=>{
    His(`/products/${id}`)
  }  
  return(<>
    {data?(
        <div id="electronics">
            {data.map((items)=>(
                <span id="product-span">
                    
                    <a id="product-a" onClick={()=>HandleSubmit(items.id.toString())}>
                        <img id="product-img" src={items.image}/>
                        
                        <h5 key={items.id}>{items.title}</h5>
                        
                        <p key={items.id}>${items.price}</p>
                    </a>
                
                </span>
            ))}
        </div>
    ):(
        <p>Loading Data...</p>
    )
    }
    </>)
}
export default CategoryDetails;