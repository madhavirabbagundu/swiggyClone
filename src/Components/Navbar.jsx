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
    <div class = "Navbar">
   {/* <div id = 'logo'><Link to = "/"><img src = 'https://gumlet.assettype.com/afaqs%2F2020-12%2F71dc202e-f873-4598-baa8-b9236beacfd2%2FSwiggy_PNG_Logo.png?rect=0%2C242%2C2048%2C1152&w=1200&auto=format%2Ccompress&ogImage=true'/></Link></div> */}
   
   <div id = "navName">
   <div><Link className="nav" to = "Search">SEARCH</Link></div>
    <div><Link className = "nav" to= "SignIn">SIGNIN</Link></div>
   <div><Link className = "nav1" to = "Cart">CART:{cartCount}</Link></div>
    </div>
    </div>
    </>
)
}
export { Navbar }