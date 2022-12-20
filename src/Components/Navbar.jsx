import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { SignIn } from "./SignIn";

const Navbar = ()=>{
return(
    <>
    {/* <div>this is Navbar</div>  */}
    <div id = "Navbar">
        <Link className="nav" to = "/">Home</Link>
    <Link className="nav" to = "Search">Search</Link>

    <Link className = "nav" to= "SignIn">SignIn</Link>
    {/* <Link  to = "Search">Search</Link> */}
    <Link className = "nav" to = "Cart">Cart</Link>
    </div>
    {/* <SignIn /> */}
    </>
)
}
export { Navbar }