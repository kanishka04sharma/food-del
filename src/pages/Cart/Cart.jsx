import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
       
       {food_list.map((item,index)=>{
        console.log(item)
        if(cartItems[item._id]>0)
        {
          return(
            <div className='cart-items-title cart-items-item' >
              <img src={item.image} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>{item.price*cartItems[item._id]}</p>
              <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              
            </div>
            
          )
        
        }
       })}
      </div>
      <div className='cart-buttom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
              <hr />
            </div>
            <div className='cart-total-details'>
              <p>Delivery fee</p>
              <p>${2}</p>
              <hr />
            </div>
            <div className='cart-total-details'>
              <p>Total</p>
              <b>${getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have promo code , Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Enter Promo Code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart;
