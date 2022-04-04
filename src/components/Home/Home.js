import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {

    const [cart,setCart]=useCart();
    const subCart=cart.slice(0,3);

   

    return (
        <div>
           
            <div className='home-page'>
                <div >
                <div className='line-gap'>
                   <h1 className='heading'>About The Product, Know Better</h1>
                   <h1 className='heading1'>Choose Best Product.</h1>
                </div>
                   <p className='paragraph'>A review — as discussed here — is nothing more than product-centered content that should investigate in-depth both the benefits and drawbacks of specific goods or services. Some full-time writers and marketers focus on testing and reviewing products. Then, they labor on submitting them to third party websites, blogs, and platforms. Product reviews can do much more than just make your product seem enticing; they can boost your product’s image and make it the go-to product. In fact, online reviews are essential to marketing and branding any company these days.</p>
                  <button className='button-design'>Live Demo</button>
                </div>
                <div className='home-img'>
                <img src='https://i.ibb.co/RPC4H9f/white-front-cars-running-road-37416-48.webp' alt=''></img>
                </div>
            </div>
            <h1 className='customer-review'>Customer Reviews</h1>

           {/*------ cart design ------*/}

            <div className='cart-design'>
           {
                subCart.map(
                    cart1=><div className="cart-border"><p>Name: {cart1.name}</p>
                    <p>{cart1.review}</p>
                    <img className='img-size' src={cart1.img} alt=''></img>
                    <p className='avata-rating'> <img className='men-img' src={cart1.menimg} alt=''></img><span className='span-tag'>Rating:{cart1.rating}</span></p>
                    </div>
                          
                    )
            }
            

           </div>

           <Link  to="/reviews"><p className='button-center'><button className='reviews-button'>See All Reviews</button></p></Link> 
            
        </div>
    );
};

export default Home;