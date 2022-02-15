import './Navbar.css'
// import TourDetails from '../TourDetails/TourDetails';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

        <>
            <nav className='navbarE'>
                <Link className='navbarA' to='/'>  Home </Link>
                <Link className='navbarA' to='/city/:id'>  Details  </Link>
                
            </nav>
            
        </>

    );
}

export default Navbar;

