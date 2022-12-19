import React from 'react';
import './App.css';
import { SignIn } from './Components/SignIn'
import { Navbar } from './Components/Navbar'
import { Route, Routes} from 'react-router-dom'
import { Cart } from './Components/Cart';
import { Search } from './Components/Search';
import { Login } from './Components/Login';
function App() {
  return (
    <div className="App">
    < Navbar />
    <Routes> 
      <Route path = "/SignIn" element = {<SignIn/>}>SignIn</Route>
      {/* <Route path = "/Login/SignIn" element = {<SignIn />}>SignIn</Route> */}
      <Route path = "/Cart" element = {<Cart />}>Cart</Route>
      <Route path = "/Search" element = {<Search/>}>Search</Route>
      <Route path = "/Login" element = {<Login/>}>Login</Route>
      </Routes>
      {/* <Login /> */}
      {/* < SignIn /> */}

    </div>
  );
}

export default App;
