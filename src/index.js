import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './myComponent/login';
import Bigbox from './myComponent/about';
import AboutMyJourney from './myComponent/aboutMyJourney';
import Icons from "./myComponent/icons"
import Project from "./myComponent/project"
import Box from "./myComponent/project2"
import Footer from "./myComponent/footer"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Login/>
    <Bigbox/>
    <AboutMyJourney/>
    <Icons/>
    <Project/>
    <Box/>
    <Footer/>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
