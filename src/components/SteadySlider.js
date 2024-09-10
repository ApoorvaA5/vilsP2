// src/components/SteadySlider.js
import React from 'react';
import { Slider, Stack } from '@mui/material';

const SteadySlider = ({ value }) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Slider value={value} disabled aria-labelledby="disabled-slider" />
    </Stack>
  );
};

export default SteadySlider;
