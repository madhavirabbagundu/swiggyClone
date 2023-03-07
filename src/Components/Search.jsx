import React from "react";
import "./Navbar.css"

const Search = ()=>{
    const [item,setItem] = React.useState([])
    const [itemData,setItemData] = React.useState('')
   React.useEffect (() =>{
    fetch(`http://localhost:3000/items`)
    // fetch(`http://localhost:3000/movies`)

    .then((res)=>res.json())
    .then((json)=>setItem(json))
   },[])

    const handleChage = (e)=>{
        setItemData(e.target.value);

    }
    console.log(item)
    // const {text} = itemData;
return(
    <>
    <div>
        <h1>Search Here</h1>
        <input type = "text"
        value = {itemData}
        className = "searchBoxes"
        onChange={handleChage}
        placeholder="Enter the item"/>
    </div>

    <div className = "searchData">
      
        {
        item.filter(data => data.name.toLowerCase().includes(itemData.toLowerCase())).map((data)=>(
            <div class = "searchitem">{data.name}</div>
        ))
        } 
    </div>
    </>
)
}
export { Search }