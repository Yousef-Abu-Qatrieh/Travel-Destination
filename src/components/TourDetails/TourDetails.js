import Navbar from '../Navbar/Navbar';
import { Link,useParams } from 'react-router-dom';
import data from '../../data/db.json'
import '../Navbar/Navbar.css'
const {id}=useParams();

function TourDetails(props) {
    return (

        <>

            
            {props.data.map((meme,idx) => {
                return (
                    <div key={idx} >
                        
                        <Link className='navbarA' to={`/city/${meme.id}`}>  Details  </Link>
                    </div>
                );
            })}
            
         
        </>

    );
}

export default TourDetails;