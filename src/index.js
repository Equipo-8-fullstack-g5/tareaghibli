import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  Home  from "./components/Home";
import Card_movies from "./components/Card_movies";
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Info from './components/Info';
// import { Container, Navbar , Nav, NavDropdown, Card } from 'react-bootstrap';
import Menu from './components/Menu'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/Movies' element={<Card_movies />}/>
     <Route path='/Info' element={<Info />}/>
   </Routes>

   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
