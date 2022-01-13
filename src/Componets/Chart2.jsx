import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";


const Linechart = (props) => {
  return (
    <div>
     
      <Line
        
        data={props.charData}
        options={{
          radius: 1,
          maintainAspectRatio: false,
          scale:{
            display: false
          },
          legend: {
            labels: {
              fontSize: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default Linechart;
