import React from "react";
const Home = () =>{
    const[data,setData] = React.useState([])

    React.useEffect (()=>{
        fetch(`http://localhost:3000/items`)
        .then((res)=>res.json())
   .then((json)=>setData(json))
    },[])
    console.log("data"+data)


return(
    <>
    <div id = "items">
        {
            data.map((item)=>(
                <div>
                <img src = {item.img}/>
                <h3>{item.name}</h3>
                
                </div>
            ))
        }
    
    </div>
    </>
)
}
export { Home }