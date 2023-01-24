import React from "react";
import "./Navbar.css"

const Home = () =>{
    const[data,setData] = React.useState([])

    React.useEffect (()=>{
        fetch(`http://localhost:3000/items`)
        .then((res)=>res.json())
   .then((json)=>setData(json))

    },[])
    

    const handlesort = (e)=>{
       console.log(e.target.value)
       if(e.target.value === "high"){    
        const high = [...data].sort((a,b)=> a.name.localeCompare(b.name)) 
        setData(high)
        
       }
       else if(e.target.value === "low"){
        // console.log(data)
        const low = [...data].sort((a,b)=>b.name.localeCompare(a.name))
        setData(low)
       }
       else if(e.target.value === "rating"){
       const rating = [...data].sort((a,b)=>a.Price-b.Price)
       setData(rating)
       }

    }
    // console.log(data)

return(
    <>
    <div id = "sort">
        <select id = "Sorting-properties" defaultValue="Sort" onChange = {handlesort}>
        <option id = "Sorting-properties1" value = "high">High To Low</option>
        <option id = "Sorting-properties1" value = "low"> Low To High</option>
        <option id = "Sorting-properties1" value = "rating"> Rating</option>


        </select>
        
    </div>

    <div id = "items">

        {
            data.map((item)=>(
               
               <div key = {item.id} id = "itemsData">
                <img src = {item.img} alt = ""/>
                <h3>{item.name}</h3>
                <p>{item.Price}</p>
                <p style = {{color:'blue'}}>Rate:{item.Rate}</p>
                </div>
            ))
            }
    </div>
    </>
)
}
export { Home }