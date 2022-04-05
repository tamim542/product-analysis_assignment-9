import React  from 'react';


const About = (props) => {
    console.log(props);
    const {month, investment, sell, revenue}=props.revenue1;
  
    return (
        <div>
            <h1>hi there am i</h1>
            <h1>{month}</h1>

        </div>
    );
};

export default About;