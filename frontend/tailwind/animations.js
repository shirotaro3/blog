module.exports = {
  animation: {
    fadeIn: 'fadeIn 0.7s ease',
    growWidth: 'growWidth 0.9s ease',
    growHeight: 'growHeight 0.9s ease',
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
    growWidth: {
      '0%': {
        width: 0,
        opacity: 1,
      },
      '30%': {
        width: '100%',
        opacity: 0.7,
      },
      '100%': {
        opacity: 0,
      },
    },
    growHeight: {
      '0%': {
        height: 0,
        opacity: 1,
      },
      '30%': {
        height: '100%',
        opacity: 0.7,
      },
      '100%': {
        opacity: 0,
      },
    },
  },
}
