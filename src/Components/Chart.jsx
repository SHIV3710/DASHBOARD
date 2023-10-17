import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', user: 500, guest: 400},
  { name: 'Week 2', user: 350, guest: 450 },
  { name: 'Week 3', user: 200, guest: 300 },
  { name: 'Week 4', user: 400, guest: 350 },
];

const Chart = () => {
  const yTicks = [0, 100, 200, 300, 400, 500];
  return (
    <div style={{ width: '68vw', height: '30vh' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis ticks={yTicks}/>
          <Tooltip />
          <Legend verticalAlign="top" align="right" height={36} />
          <Bar dataKey="user" fill="#98D89E" name="User" barSize={40}/>
          <Bar dataKey="guest" fill="#EE8484" name="Guest" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
