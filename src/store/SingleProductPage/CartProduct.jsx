

import React, { useContext, useState } from 'react'
import './singleproduct.css'
import Navbar from '../components/Navbar'
import { UserContext } from '../context/UserContext'
import { useParams } from 'react-router-dom'
const CartProduct = () => {

    const {id} = useParams();

    const [quantity,setQuantity] = useState(1);

    const {cartitems,addToCart,removeItem} = useContext(UserContext)


    const quantityIncrement=()=>{
        setQuantity(preQty=> preQty+1);
    }

    const quantityDecrement=()=>{
        
        if(quantity > 1){
            setQuantity(preQty=> preQty-1);
        }
        else if(quantity == 1)
        {
            setQuantity(1);
        }
    }

    const productBuy=()=>{
        alert("order successful");
    };
  return (
    <div style={{textAlign:'center'}}>
        <Navbar></Navbar>
        {
            cartitems.length !== 0 ?(
                cartitems.map((item)=>{
                    return(
                        <div className="cartproduct_section">
                            <div className="cartproduct_image">
                                <img src={item.image}></img>
                            </div>
                            <div className="cartproduct_details">
                                <div className="cartproduct_company">
                                    <p><strong style={{color:'violet'}}>Comapny Name: </strong>{item.company}</p>
                                </div>
                                <div className="cartproduct_model">
                                    <p><strong style={{color:'violet'}}>Model: </strong>{item.model}</p>
                                </div>
                                <div className="cartproduct_quantity">
                                    <p>
                                        <strong style={{color:'violet'}}>Quantity: </strong>
                                        <button onClick={quantityIncrement} className="quantity_button">+</button>
                                        <span className="quantity_value"> {quantity} </span>
                                        <button onClick={quantityDecrement} className="quantity_button">-</button>
                                    </p>
                                </div>
                                <div className="cartproduct_price">
                                    <p><strong  style={{color:'violet'}}>Price: </strong>{quantity*item.price} /-</p>
                                </div>
                                <div className="cartproduct_description">
                                    <p><strong  style={{color:'violet'}}>Description: </strong>{item.description}</p>
                                </div>
                                <div className="cartproduct_buttons">
                                    <div className="cartproduct_buy">
                                        <button onClick={()=>{productBuy()}}>Purchase</button>
                                    </div>
                                    <div className="cartproduct_remove">
                                        <button onClick={()=>{removeItem(item)}}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            ):
            (
                <div>
                    <h2>Cart is Empty</h2>
                </div>
            )
        }

    </div>
  )
}

export default CartProduct