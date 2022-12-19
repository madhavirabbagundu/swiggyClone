import React from "react";
const Search = ()=>{
    const [item,setItem] = React.useState([])
    const [itemData,setItemData] = React.useState({
    text : ""})
   React.useEffect (() =>{
    fetch(`http://localhost:3000/items`)
    // fetch(`http://localhost:3000/movies`)

    .then((res)=>res.json())
    .then((json)=>setItem(json))
   },[])

    const handleChage = (e)=>{
        setItem(e.target.value);

    }
    console.log(item)
return(
    <>
    <div>
        <h1>Search Here</h1>
        <input type = "text"
        value = {itemData}
        className = "inputBoxes"
        onChange={handleChage}
        placeholder="Enter the item"/>
    </div>

    <div>
       {
        item.filter(data=>data.name.includes(itemData)).map(data=>{
            <div>{data.name}</div>
        
       })}
    </div>
    </>
)
}
export { Search }