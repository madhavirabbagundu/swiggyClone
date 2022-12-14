import React from 'react';
import './App.css';
import { SignIn } from './Components/SignIn'
import { Navbar } from './Components/Navbar'
import { Route, Routes} from 'react-router-dom'
import { Cart } from './Components/Cart';
function App() {
  return (
    <div className="App">
    < SignIn />
    < Navbar />
    <Routes> 
      <Route path = "/SignIn" element = {<SignIn />}>SignIn</Route>
      <Route path = "/Cart" element = {<Cart />}>SignIn</Route>
      <Route path = "/SignIn" element = {<SignIn/>}>SignIn</Route>

      </Routes>
    </div>
  );
}

export default App;
