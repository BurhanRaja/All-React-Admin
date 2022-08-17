import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { SparklineAreaData } from '../../assets/dummyData';


const Stacked = () => {
    return (
        <ResponsiveContainer width={392} height={450} className='text-xs'>
            <BarChart
                width={1000}
                height={800}
                data={SparklineAreaData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Stacked
