import React from 'react';
import './Desturcture.css';
const Desturcture = (props) => {

    const {name, img, review, menimg, rating}=props.cart2;

    return (
        <div>
            
            <div className='avata-rating'>
            <img className='men-img' src={menimg} alt=''></img>   
            <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Desturcture;