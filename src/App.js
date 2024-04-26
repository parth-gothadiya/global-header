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
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Category' element={<Category/>}/>
      <Route path='/Feature' element={<Feature/>}/>
      <Route path='/About' element={<About/>}/>

      <Route path='/Page404' element={<Page404/>}/>
      <Route path='/Loader' element={<Loader/>}/>

      {/*----------------- Proflie -----------------*/}
      <Route path='/Proflie' element={<Proflie/>}/>

    </Routes>

  

    </>
  );
}

export default App;
