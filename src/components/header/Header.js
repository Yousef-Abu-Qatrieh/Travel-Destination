import './Header.css'
import Navbar from '../Navbar/Navbar';
import {Link} from 'react-router-dom'

function Header() {
    return (

        <>


            <h1 className="header" >Travel Info  </h1>
            <Link className='navbarA' to='/'>  Home </Link>
         
        </>

    );
}

export default Header;