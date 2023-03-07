import React from "react";
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
const Login = () =>{
    const [login,SetLogin] = React.useState({
        number:"",

    })
    const nav= useNavigate()
    const handleChange = (e)=>{
        const {name,value} = e.target;
        SetLogin({...login,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(number.length)
        if(number.length === 10){
        nav('/')
        }
        else{
            alert('please choose the number')
        }
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
                required
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