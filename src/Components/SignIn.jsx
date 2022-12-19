import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const SignIn = () =>{
    const [data, setData] = React.useState({
        number:"",
        name:"",
        email:""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }

    const handleSubmit = (e1)=>{
        e1.preventDefault();
    }
console.log(data)
    const {name,email,number} = data;
return(
    <>
    <h1>
         Sign Up
    </h1>
    <div style = {{color:'red'}}>    
    <Link to = "Login">or Login to your account</Link>  
    </div>


    <div>
    <form onSubmit = {handleSubmit}>
        <div>
    <input type = "number"
    placeholder='Enter your phone number'
    name = "number"
    value = {number}
    className = "inputBoxes"
    onChange = {handleChange}
    />
    </div>
    <div>
    <input type = "text"
    placeholder='Enter your name'
    name  = "name"
    className = "inputBoxes"

    value = {name}
    onChange = {handleChange}
    />
    </div>
    <div>
    <input type = "email"
    placeholder='enter your email'
    name = "email"
    className = "inputBoxes"

    value={email}
    onChange = {handleChange}/>
</div>
<div>
    <input type = "submit"
    value = "submit"
    className = "inputBoxes"

    />
    </div>
    </form>
    </div>
    </>
)
}
export { SignIn }