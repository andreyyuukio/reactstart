import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Form from './form';
import Weather from './weather';
const Sidebar = () => {  
    return (         
        <div className="sidebar">               
            <h1>React Router Title</h1> 
            <Form />    
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="info" element={<Information />} />           
            </Routes>
        </div>
    );
}
function Home() {
    return (
      <div>
        <main>
          <h2>React Router Information</h2>
          <p>Какой-то текст</p>
          <p>Ещё какой-то текст</p>
        </main>
        <nav>
          <Link to="/info">Information</Link>
        </nav>
      </div>
    );
  }
  
  function Information() {
    return (
      <div>
        <main>
          <h2>Подробная информаия про React Router</h2>
          <p>Много текста...</p>
          <p>Много текста...</p>
          <p>Много текста...</p>
        </main>
        <Weather /> 
        <nav>
          <Link to="/">На Главную</Link>
        </nav>
      </div>
    );
  }
export default Sidebar;


