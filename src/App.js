import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Feature from './Component/Feature';
import Category from './Component/Category';
import About from './Component/About';
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
    </Routes>

  

    </>
  );
}

export default App;
