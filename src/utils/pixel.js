const round = (value, precision = 0) => {
  const multiplier = 10 ** precision;
  return Math.round(value * multiplier) / multiplier;
};

const pixel = (px, {
  base = 16,
  unit = 'rem',
} = {}) => `${round(px / base, 5)}${unit}`;

export default pixel;

export {
  pixel as px,
};
