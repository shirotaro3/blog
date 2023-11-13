module.exports = {
  animation: {
    fadeIn: 'fadeIn 0.7s ease',
    bgFadeIn: 'bgFadeIn 0.7s ease',
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
    bgFadeIn: {
      '0%': {
        backgroundColor: '#ffffff00',
      },
      '30%': {
        backgroundColor: '#ffffff00',
      },
      '100%': {
        backgroundColor: '#ffffffff',
      },
    },
    growWidth: {
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
    growHeight: {
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
