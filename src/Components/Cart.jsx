import React from "react";
import { useParams } from "react-router-dom";

const Cart = ()=>{
    const {itemId} = useParams();
    const[cartData,setCartData] = React.useState({})



    React.useEffect(()=>{
     fetch(`http://localhost:3000/items/${itemId}`)
     .then((res)=>res.json())
     .then((json)=>{
     setCartData(json)})
    
    },[itemId])
    console.log(cartData)
    return(
        <>
        <div>
       <img src = {cartData.img}></img>
       <h2>{cartData.name}</h2>

        </div>
        </>
    )
}
export { Cart }