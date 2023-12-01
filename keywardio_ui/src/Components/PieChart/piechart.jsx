import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';



const size = {
  width: 500,
  height: 300,
};


const palette = ['#FF823C', '#0096FF', '#323C46'];

export default function PieChartWithPaddingAngle({data}) {
  return (

    <PieChart series={[{ data, innerRadius: 80 , paddingAngle: 2, outerRadius: 120 }]} {...size}
   colors={palette}
    >
      
    </PieChart>
  );
}