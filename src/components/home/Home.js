import Tours from "../tours/Tours";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import data from "../../data/db.json";


function Home() {
    return (

        <>
            <Header  />
      
     
     <Tours data={data} />
     <Footer />
         
        </>

    );
}

export default Home;