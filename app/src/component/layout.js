import {Outlet} from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Signin from './signin'
import Category from './category'
function Layout() {
    return(<>
    <header>

        <Header/>
    </header>
    <section>
        <Outlet />
    </section>
    <footer>    
        <Footer/>
    </footer>
    </>)


}
export default Layout;