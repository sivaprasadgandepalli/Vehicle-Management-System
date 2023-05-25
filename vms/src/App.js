import logo from './logo.svg';
import './App.css';
import Login from './loginPage';
import SignUp from './signUp';
import AboutPage from './about';
import Home from './home';
import Contact from './contactPage';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './adminDashbord';
import Nav from './nav';
import Map from './ifrmetag';
import GetDetails from './GetDetails';
import Footer from './footer';
import FuelAdd from './Fuel';
import User from './userlogin';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/getdetails' element={<GetDetails/>}></Route>
      <Route path='/contactPage' element={<Contact/>}></Route>
      <Route path='/Fuel' element={<FuelAdd/>}></Route>
      <Route path='/loginPage' element={<Login/>}/>
    </Routes>
    </BrowserRouter><br/>
    
    </>
    
    
  );
}

export default App;
