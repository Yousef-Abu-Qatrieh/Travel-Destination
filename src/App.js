import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Tours from './components/tours/Tours';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom'
import TourDetails from './components/TourDetails/TourDetails';

function App() {
  return (
    <>
     <Header />
     <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/city/:id' element={<TourDetails />} />

            </Routes>
    <Footer/>
    </>
   
  );
}

export default App;
