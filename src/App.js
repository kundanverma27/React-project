import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Wrapper from './Wrapper';
import Navbar from './Navbar';
import Footer from './Footer';
import Detailed  from './Detailed'; 

function App() {
  return (
    <div className="App">
      <Router>

          <Navbar/>

          <Routes>
             <Route path="/"  element={<Wrapper/>}/> 
             <Route path="product/:id" element={<Detailed/>}/> 
          </Routes>
          <Footer/>

       </Router>
    </div>
  );
}

export default App;
