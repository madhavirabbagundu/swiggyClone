import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const SignIn = () =>{
    const [data, setData] = React.useState({
        number:"",
        name:"",
        email:""
    })
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value})
    }

    const handleSubmit = (e1)=>{
        e1.preventDefault();
        navigate('/')
    }
console.log(data)
    const {name,email,number} = data;
return(
    <>
    <h1>
         Sign Up
    </h1>
    <div id = "signinPage">    
    <Link style = {{color:'blue'}} to = "/Login">or Login to your account</Link>  
    </div>


    <div id = "signinPage">
    <form onSubmit = {handleSubmit}>
        <div>
    <input type = "number"
    placeholder='Enter your phone number'
    name = "number"
    value = {number}
    required
    className = "inputBoxes"
    onChange = {handleChange}
    />
    </div>
    <div>
    <input type = "text"
    placeholder='Enter your name'
    name  = "name"
    required
    className = "inputBoxes"

    value = {name}
    onChange = {handleChange}
    />
    </div>
    <div>
    <input type = "email"
    placeholder='enter your email'
    name = "email"
    required
    className = "inputBoxes"

    value={email}
    onChange = {handleChange}/>
</div>
<div>
    <input type = "submit"
    value = "submit"
    className = "submitBox"
    />
    </div>
    </form>
    </div>
    </>
)
}
export { SignIn }