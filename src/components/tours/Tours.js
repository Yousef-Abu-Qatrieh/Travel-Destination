// import './Tours.css'

import {Link} from 'react-router-dom'
function Tours(props) {

    return (
        <>
            {props.data.map((meme,idx) => {
                return (
                    <Link to={"/city/"+meme.id}> 
                    
                    <div key={idx}>
                        <h3>Name : {meme.name}</h3>
                        <img src={meme.image} alt={meme.name} />
                     
                    </div>
                    </Link>
                  
                );
             })} 
        </>
    );
}

export default Tours;
