module.exports = {
  animation: {
    fadeIn: 'fadeIn 0.7s ease',
    scaleX: 'scaleX 0.9s ease',
    scaleY: 'scaleY 0.9s ease',
  },
  keyframes: {
    fadeIn: {
      '0%': {
        opacity: 0,
      },
      '30%': {
        opacity: 0,
      },
      '100%': {
        opacity: 1,
      },
    },
    scaleX: {
      '0%': {
        transform: 'scaleX(0)',
        opacity: 1,
      },
      '30%': {
        transform: 'scaleX(1)',
        opacity: 0.7,
      },
      '100%': {
        opacity: 0,
      },
    },
    scaleY: {
      '0%': {
        transform: 'scaleY(0)',
        opacity: 1,
      },
      '30%': {
        transform: 'scaleY(1)',
        opacity: 0.7,
      },
      '100%': {
        opacity: 0,
      },
    },
  },
}
