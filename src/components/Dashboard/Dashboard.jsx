import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Dashboard = () => {
   const marksArray = [
    {
      "id": 1,
      "name": "Element 1",
      "physics": 85,
      "chemistry": 72,
      "math": 90,
      "biology": 78
    },
    {
      "id": 2,
      "name": "Element 2",
      "physics": 70,
      "chemistry": 88,
      "math": 95,
      "biology": 60
    },
    {
      "id": 3,
      "name": "Element 3",
      "physics": 92,
      "chemistry": 78,
      "math": 85,
      "biology": 92
    },
    {
      "id": 4,
      "name": "Element 4",
      "physics": 65,
      "chemistry": 90,
      "math": 72,
      "biology": 81
    },
    {
      "id": 5,
      "name": "Element 5",
      "physics": 88,
      "chemistry": 69,
      "math": 78,
      "biology": 56
    },
    {
      "id": 6,
      "name": "Element 6",
      "physics": 76,
      "chemistry": 82,
      "math": 93,
      "biology": 70
    },
    {
      "id": 7,
      "name": "Element 7",
      "physics": 81,
      "chemistry": 75,
      "math": 68,
      "biology": 88
    },
    {
      "id": 8,
      "name": "Element 8",
      "physics": 93,
      "chemistry": 60,
      "math": 79,
      "biology": 72
    },
    {
      "id": 9,
      "name": "Element 9",
      "physics": 72,
      "chemistry": 85,
      "math": 77,
      "biology": 63
    },
    {
      "id": 10,
      "name": "Element 10",
      "physics": 68,
      "chemistry": 92,
      "math": 81,
      "biology": 74
    },
    {
      "id": 11,
      "name": "Element 11",
      "physics": 87,
      "chemistry": 73,
      "math": 88,
      "biology": 80
    },
    {
      "id": 12,
      "name": "Element 12",
      "physics": 78,
      "chemistry": 82,
      "math": 95,
      "biology": 69
    }
  ]
  
      

    return (
        <div className=' my-8  w-full flex justify-center'>
            <LineChart 
            width={700}
            height={400}
            data={marksArray}
            >
                <Line dataKey='physics' stroke="#8884d8"></Line>
                <Line dataKey='math'stroke="#82ca9d" ></Line>
                <Line dataKey='chemistry' stroke='#800080'></Line>
                <Line dataKey='biology' stroke='#0000ff'></Line>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
            </LineChart>
        </div>
    );
};

export default Dashboard;