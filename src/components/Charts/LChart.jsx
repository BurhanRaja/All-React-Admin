import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { SparklineAreaData } from '../../assets/dummyData';

const LCharts = () => {
    return (
        <ResponsiveContainer width={300} height={200}>
        <LineChart
            width={500}
            height={300}
            data={SparklineAreaData}
            margin={{
                top: 5,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    </ResponsiveContainer>
    )
}

export default LCharts
