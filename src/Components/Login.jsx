import React from "react";
import { Link } from 'react-router-dom'
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
    return(
        <>
        <h1>
            Login
        </h1>
        <div>
       <Link style = {{color:'orangered'}} to = "SignIn">or create an account</Link>
        </div>

        <div>
            <form onSubmit={handleSubmit}>
                <input type = "number"
                placeholder = "enter your name"
                name = "number"
                value = {number}
                className = "inputBoxes"

                onChange={handleChange}/><br/>
                <input type = "submit"
                    className = "inputBoxes"
                    value = "submit"/>
            </form>
        </div>
        </>
    )
}
export { Login }