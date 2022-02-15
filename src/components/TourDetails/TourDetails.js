import { useParams } from 'react-router-dom';
import data from '../../data/db.json'
import { useState } from 'react';


function TourDetails() {

    const [readMore, setReadMore] = useState(false)
    let { id } = useParams()

    const result = data.filter((value) => value.id === id);
    return (

        <>
            <h3>{result[0].name}</h3>
            <p>
                {readMore
                    ? `Description : ${result[0].info}` : `Description : ${result[0].info.substring(0, 250)} ... `


                }
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "show less" : "show more"}
                </button>

            </p>
            <p>{result[0].price}</p>
            <img src={result[0].image} />


        </>

    );
}

export default TourDetails;