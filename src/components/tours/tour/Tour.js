import {Link} from 'react-router-dom';

import Tours from '../../tours/Tours'
import './Tour.css'

function tour(props){

return(
    <>
    {props.data.map((meme,idx) =>{
        return(

            <div key={idx}>
                <Link to={`/city/${meme.id}`}>
                    <Tours tours={meme} />
                </Link>

            </div>
        )
    
    
    
    
    })}
    
    
    
    </>

)



}