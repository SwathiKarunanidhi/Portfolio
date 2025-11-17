export const getAnimationConfig = (delay = 0.5) => {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay: delay },
  };
};
