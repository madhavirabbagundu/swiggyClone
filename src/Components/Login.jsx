import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'
const Login = () =>{
    const [login,SetLogin] = React.useState({
        number:"",

    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        SetLogin({...login,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const {number} = login;
    console.log(login)
    return(
        <>
        <h1>
            Login
        </h1>
        <div id = "loginPage">
       <Link style = {{color:'blue'}} to = "/SignIn">or create an account</Link>
        </div>

        <div id = 'loginPage'>
            <form onSubmit={handleSubmit}>
                <input type = "number"
                placeholder = "enter your name"
                name = "number"
                value = {number}
                className = "inputBoxes"

                onChange={handleChange}/><br/>
                <input type = "submit"
                    className = "submitBox"
                    value = "Login"/>
            </form>
        </div>
        </>
    )
}
export { Login }