import Tours from "../tours/Tours";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import data from "../../data/db.json";
import{Routes,Route} from 'react-router-dom'

function Home() {
    return (

        <>
           
      
            <Routes>
<Route path='/' element={ <Header  />} />
{/* <Route path='/city/:id' element={ <Details/> }/>  */}
 
</Routes>
     <Tours data={data} />
     <Footer />
         
        </>

    );
}

export default Home;



