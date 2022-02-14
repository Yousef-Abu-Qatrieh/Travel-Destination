import './Tours.css'
function Tours(props) {

    return (
        <>
            {props.data.map(meme => {
                return (
                    <div className='body'>
                        <h3>Name : {meme.name}</h3>
                        <img src={meme.image} alt={meme.name} />
                        
                        {/* <p>Rank : {meme.rank}</p> */}
                    </div>
                );
            })}
        </>
    );
}

export default Tours;
