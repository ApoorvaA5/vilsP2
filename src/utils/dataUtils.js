// src/utils/dataUtils.js
export const getPauseStatus = (pauses) => {
  if (pauses >= 0 && pauses <= 3) return 'Optimal';
  if (pauses >= 4 && pauses <= 6) return 'Good';
  if (pauses >= 7 && pauses <= 10) return 'Fair';
  return 'Needs Attention';
};

export const getPauseColor = (pauses) => {
  if (pauses >= 0 && pauses <= 3) return 'green';
  if (pauses >= 4 && pauses <= 6) return 'orange';
  if (pauses >= 7 && pauses <= 10) return 'red';
  return 'black';
};
