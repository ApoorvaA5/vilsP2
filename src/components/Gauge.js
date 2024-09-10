// src/components/Gauge.js
import React from 'react';
import GaugeChart from 'react-gauge-chart';

const Gauge = ({ value }) => {
  const validValue = isNaN(value) ? 0 : value;
  return (
    <div style={{ width: '25%' }}>
      <GaugeChart 
        id="gauge-chart1" 
        nrOfLevels={30} 
        percent={validValue / 100} 
        textColor="#000000" 
      />
    </div>
  );
};

export default Gauge;
