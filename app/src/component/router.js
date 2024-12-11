import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './layout'
import Signin from './signin'
import Signup from './signup'
import Category from './category'
import Product from './product'
import CategoryDetails from './categorydetails'
import AllProduct from './allproduct'


  
function Router() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="signin" element={<Signin/>}/>
                    <Route path="signup" element={<Signup/>}/>
                    <Route index element={<Category/>}/>
                    <Route path=":value" element={<CategoryDetails/>}/>
                    <Route path="/products/:id" element={<Product/>}/>       
                    <Route path="allproducts" element={<AllProduct/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
export default Router;