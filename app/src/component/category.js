import {Link, useNavigate} from 'react-router-dom'
import useFetchComponent from './useFetch'
const Category=()=> {
    const [data] = useFetchComponent('https://fakestoreapi.com/products/categories')
    // useEffect(()=>{
    //     useFetch('https://fakestoreapi.com/products/categories')
    //         .then(response=>response.json())
    //         .then((data)=>setData(data))
    //         .then((error)=>console.error(error))
    // },[])
    const History=useNavigate()
    const HandleInput=(value)=>{
        History(`/${value}`)
    }
    
    return(<>
    <div className="main-page">
    {data? (
        <>
         
        <div className="category-second-div">
            {data.map((value)=>(
                <a id="categories" href={value} onClick={()=>HandleInput(value)}><span className="category-span">{value}</span></a>
            ))} <br/>   
        </div>
            <span className="allproduct-button">
            <Link to="/allproducts" className="allproduct">ALL PRODUCTS</Link>
            </span>
    
                    </>):(
        <p>Loading Data....</p>
    )
    }
    
    </div>
    </>
)}
export default Category