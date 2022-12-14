import React from "react";
import { Link } from 'react-router-dom'

const Navbar = ()=>{
return(
    <>
    <div>this is Navbar</div> 
    <Link  to= "SignIn">SignIn</Link>
    <Link  to = "Search">Search</Link>
    <Link  to = "Cart">Cart</Link>
    </>
)
}
export { Navbar }