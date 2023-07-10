export const easeIn = (duration, delay) => {
  return {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };
};

export const fadeIn = (direction, duration, delay, transitionY) => {
  return {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
    hidden: {
      x: direction === "left" ? -150 : direction === "right" ? 150 : 0,
      y:
        direction === "top"
          ? -transitionY
          : direction === "bottom"
          ? transitionY
          : 0,
      opacity: 0,
    },
  };
};
