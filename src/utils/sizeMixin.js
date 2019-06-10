const round = (value, precision = 0) => {
  const multiplier = 10 ** precision;
  return Math.round(value * multiplier) / multiplier;
};

const calculateRelativeSize = (px, {
  base = 16,
  unit = 'rem',
} = {}) => `${round(px / base, 5)}${unit}`;

export default calculateRelativeSize;
