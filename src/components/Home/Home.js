import React from 'react';
import './Home.css';

const Home = () => {
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
        </div>
    );
};

export default Home;