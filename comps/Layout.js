import Footer from "./Footer"
import NavBar from "./NavBar"

const Layout = ({children}) => {
    return ( 
        <div class="flex flex-col min-h-screen">
            <NavBar/>
            {children}
         <Footer/>
        </div>
     );
}
 
export default Layout;