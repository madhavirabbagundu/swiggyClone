import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { SignIn } from "./SignIn";
import { useContext } from "react";
import { CartContext } from './CartContext'

const Navbar = ()=>{
const {cartCount} = useContext(CartContext)
return(
    <>
    <div id = "Navbar">
     <Link className="nav" to = "/">Home</Link>
    <Link className="nav" to = "Search">Search</Link>
    <Link className = "nav" to= "SignIn">SignIn</Link>
    {/* <Link className = "nav" to = "Login">Login</Link> */}
    {/* <Link  to = "Search">Search</Link> */}
    <Link className = "nav" to = "Cart">cart:{cartCount}</Link>
    
    <div>Cart:{cartCount}</div>
    </div>
    {/* <SignIn /> */}
    </>
)
}
export { Navbar }