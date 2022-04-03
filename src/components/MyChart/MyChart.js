import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h1 className='text-center text-2xl font-bold'>LineChart</h1>
                <LineChart width={400} height={400} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip />
                    <YAxis></YAxis>
                </LineChart>
            </div>

            <div>
                <h1 className='text-center text-2xl font-bold'>BarChart</h1>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                    <Bar dataKey="revenue" fill="red" />
                </BarChart>
            </div>

            <div>
                <h1 className='text-center text-2xl font-bold mt-5'>ComposedChart</h1>
                <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                </ComposedChart>
            </div>

            <div>
                <h1 className='text-center text-2xl font-bold mt-5'>AreaChart</h1>
                <AreaChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Area dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                    <Tooltip />
                </AreaChart>
            </div>
        </div>

    );
};

export default MyChart;