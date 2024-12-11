import { useEffect, useState} from "react";
import {EditableText} from '@blueprintjs/core'
function AllProduct() {
  const [data,setData]=useState(null);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(response=>response.json())
      .then(datas=>setData(datas))
      .catch(error=>console.error(error))
  },[]);
  function DeleteProduct(id){
    fetch(`https://fakestoreapi.com/products/${id}`,
      {
        method:'DELETE',
      }
    ).then(response=>response.json())
    .then(datas=>{setData((data)=>{
        return data.filter(values=>values.id!==id)
      })
  })
  }
  function HandleInput(id,key,value){
    setData(data=>{
      return data.map(values=>{
        return values.id===id?{...values,[key]:value}:values
      })
    })
  }
  function HandleUpdate(id){
    const datas=data.find((values)=>values.id===id)
    fetch(`https://fakestoreapi.com/products/${id}`,
      {
        method:'PUT',
        body:JSON.stringify(datas),

      }
    ).then(response=>response.json())
    .then(data=>{})
    .catch(error=>console.error(error))
  }
  return(<>
  {data?(
    <table id="product-table">
        <tr><th>Sn.no</th>
        <th>image</th>
        <th>product name</th>
        <th>price</th>
        <th>actions</th>
        </tr>
      {data.map((values)=>(
        <tr><td >{values.id}</td> 
        <td><img src={values.image}/></td>

        <td><EditableText value={values.title} onChange={(value)=>HandleInput(values.id,'title',value)}/></td>

        <td><EditableText value={values.price} onChange={(value)=>HandleInput(values.id,'price',value)}/></td>


        <td><button className="update-button" onClick={()=>HandleUpdate(values.id)}>Update</button>
        <button onClick={()=>DeleteProduct(values.id)} className="delete-button">Delete</button></td>
        </tr>
      ))}
    </table>
  ):(
    <p>Loading Data...</p>
  )}
  </>)
}
export default AllProduct;