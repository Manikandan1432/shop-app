import { useEffect, useState } from 'react';
import Signin from './signin'
import{Link} from 'react-router-dom'

// import Signup from './signup'
function Header() {
    const [data,setData]=useState([]);
    const [filterdata,setFilterdata]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(response=>response.json())
            .then(data=>setFilterdata(data))
            .catch(error=>console.error(error))
    },[])
    const HandleChange=(value)=>{
        const result=filterdata.filter(data=>data.toLowerCase().includes(value))
        setData(result)
        if(value===''){
            setData([])
        }
    }


    return(<>
        <div className='header'>
            <ul className='ul'>
                <span id="com-name">JANAAS</span>
                <li className='li'><a href="/signin"><button className='sign-button'>Sign In</button></a></li>
                <li className='li'><a href="/signup"><button className='sign-button sign-up'>Sign Up</button></a></li>
                <button className='cart-button'><i class="fa-solid fa-cart-shopping"></i></button>              
                <form class="form">
                    <input type="text" placeholder="Search..." class="input" onChange={(event)=>HandleChange(event.target.value)}/>
                    <button class="button">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <div className='search-product'>
                       {data.map((data,i)=>(
                        <div><Link to={data}>
                            {data}
                        </Link>
                        </div>
                       )
                    )}
                    </div>

                </form>
            </ul>
        </div>
    </>)
    
}
export default Header;