import {useMatch} from 'react-router-dom';
import{Link} from 'react-router-dom'
import useFetchComponent from './useFetch';
function Product(){
    const{
        params:{ id },
    }=useMatch('/products/:id');
    let vals = id
    const link = `https://fakestoreapi.com/products/${vals}`
    const [data]=useFetchComponent(link)
    return(
        <>
        <div>
            {data ? (
                <div className='pro-div'>
                    <div className='product-div'>
                        <div className='product-img'>    
                            <img src={data.image}/>
                        </div>
                        <div className='desc-div'>
                            <h5>{data.title}</h5>
                            <p>{data.description}</p>
                            <p>${data.price}</p>
                            <p>rate:{data.rating.rate}</p>
                            <p>count:{data.rating.count}</p>
                            <span>
                                <button>Add to Cart</button>
                                <button>Buy Now</button>
                            </span>
                        </div>
                    </div>
                </div>

            ):(
                <>
                <p>Loading Data....</p>
                </>
            )}
        </div>
        </>
    );
}
export default Product