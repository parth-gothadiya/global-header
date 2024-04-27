import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Feature from './Component/Feature';
import Category from './Component/Category';
import About from './Component/About';
import Proflie from './Component/Proflie/Proflie';
import Page404 from './Component/Page404';
import Loader from './Component/Loader';
import Newpost from './Component/Newpost';
import Login from './Component/Login/Login';
import Singup from './Component/Login/Singup';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Category' element={<Category />} />
        <Route path='/Feature' element={<Feature />} />
        <Route path='/About' element={<About />} />

        <Route path='/Page404' element={<Page404 />} />
        <Route path='/Loader' element={<Loader />} />
        <Route path='/Newpost' element={<Newpost />} />

        {/*----------------- Proflie -----------------*/}
        <Route path='/Proflie' element={<Proflie />} />


        {/*----------------- Login / Singup -----------------*/}
        <Route path='/Login' element={<Login />} />
        <Route path='/Singup' element={<Singup />} />




      </Routes>



    </>
  );
}

export default App;
