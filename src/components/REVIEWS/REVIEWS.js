import React from 'react';
import useCart from '../../Hooks/useCart';
import './Reviews.css';
const Reviews = () => {
    const [cart,setCart]=useCart();
    return (
        <div>

           <div className='cart-design'>
           {
                cart.map(
                    cart1=><div><p>Name: {cart1.name}</p>
                    <p>{cart1.review}</p>
                    <img className='img-size' src={cart1.img} alt=''></img>
                    <p> <img className='men-img' src={cart1.menimg} alt=''></img><span>Rating:{cart1.rating}</span></p>
                    </div>
                          
                    )
            }

           </div>
        </div>
    );
};

export default Reviews;