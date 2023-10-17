import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 55, label: 'Basic Tees', color:'#98D89E'},
  { value: 31, label: 'Custom Shorts Pants',color:'#F6DC7D' },
  { value: 14, label: 'Super Hoodies',color:'#EE8484'},
];

const size = {
  width: 400,
  height: 200,
};

export default function PieArcLabel() {

  return (
    <PieChart
      series={[
        {
          data,
          innerRadius: 45, 
          outerRadius: 80, 
          paddingAngle: 0,
          cornerRadius: 5,
          startAngle: -180,
          endAngle: 180,
          cx:80,
          cy: 100,
  
        },
      ]}
      slotProps={{
        legend: {
          direction: 'column',
          position: { vertical: 'middle', horizontal: 'right' },
          // itemMarkWidth: 20,
          // itemMarkHeight: 11,
          // markGap: 5,
          itemGap: 10,
          padding: 0,
          // borderRadius:10, 
          sx:{
            borderRadius:'50%',
          }
        },
      }}
      {...size}
    />
  );
}
