import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const UserContext =createContext()

export const CartProvider=({children})=>{

    const [cartitems,setCartItems] = useState([]);

    const removeItem=(item)=>{
        setCartItems(cartitems.filter((apple)=> apple !== item));
    }

    const addToCart=(product)=>{
        const existingProduct = cartitems.find((item) => item.id === product.id);
        if(existingProduct){
            setCartItems([...cartitems]);
        }
        else{
            setCartItems([...cartitems, product]);
        }
    }
    
    return(
        <UserContext.Provider value={{cartitems, removeItem, addToCart}} key={"Usercontext"}>
            {children}
        </UserContext.Provider>
    )
}
export default CartProvider;