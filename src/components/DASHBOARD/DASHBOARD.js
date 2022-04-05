import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import About from '../About/About';
import './DASHBOARD.css'

const DASHBOARD = () => {
    const [revenues,setRevenue]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setRevenue(data))
    },[])

   const data1=revenues.slice(0,3);
   const data2=revenues.slice(3,6);

    return (
           
            <div>
            <div className='dashboard-chart'>
            <LineChart width={600} height={300} data={revenues}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip></Tooltip>
            </LineChart>

            {/* <BarChart width={800} height={400} data={revenues}>
            <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart> */}
            <BarChart
          width={500}
          height={300}
          data={revenues}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>

        <AreaChart
          width={500}
          height={400}
          data={revenues}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>

        <PieChart width={500} height={500}>
          <Pie data={data1} dataKey="revenue" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data2} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
        </div>
            
        </div>
    );
};

export default DASHBOARD;