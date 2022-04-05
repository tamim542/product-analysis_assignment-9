import React , { useEffect, useState } from 'react';
import Desturcture from '../Desturcture/Desturcture';
import './About.css';



const About = () => {
   
    const [cart1,setCart1]=useState([]);
    useEffect(()=>{
        fetch('Review.json')
        .then(res=>res.json())
        .then(data=>setCart1(data))
    },[])

    return (
        <div className='about'>
            <h1 className='heading-about'>Coming <span className='soon'> Soon </span>Details <span className='our-web'>our Website.</span></h1>
            <h2>List of Reviewer Name </h2>
            {
             cart1.map(cart2=><Desturcture cart2={cart2}></Desturcture>)
            } 
           

        </div>
    );
};

export default About;