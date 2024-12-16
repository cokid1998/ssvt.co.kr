import { Variants } from 'framer-motion';

interface DelayOptional {
  opacity: 1;
  y: 0;
  transition: {
    duration: number;
    ease: string;
    delay?: number;
  };
}

export const containerVariants = (delay: number) => {
  const transitionProps: Variants = {
    initial: {},
    active: {
      transition: {
        ease: 'easeInOut',
        staggerChildren: delay,
      },
    },
  };
  return transitionProps;
};

export const onlyOpacity = (duration: number, delay?: number) => {
  const transitionProps: Variants = delay
    ? {
        initial: { opacity: 0 },
        active: {
          opacity: 1,
          transition: {
            duration,
            ease: 'easeInOut',
            delay,
          },
        },
      }
    : {
        initial: { opacity: 0 },
        active: {
          opacity: 1,
          transition: {
            duration,
            ease: 'easeInOut',
          },
        },
      };
  return transitionProps;
};

export const opacityAppearBottom = (
  y: number,
  duration: number,
  delay?: number,
) => {
  const transitionProps: Variants = delay
    ? {
        initial: {
          opacity: 0,
          y,
        },
        active: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: 'easeInOut',
            delay,
          },
        },
      }
    : {
        initial: {
          opacity: 0,
          y,
        },
        active: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: 'easeInOut',
          },
        },
      };

  return transitionProps;
};

export const circleDrawer = (
  startPercent: number,
  endPercent: number,
  delay: number,
) => {
  const circleProps: Variants = {
    initial: {
      pathLength: startPercent,
    },
    active: {
      pathLength: endPercent,
      transition: {
        pathLength: {
          delay,
          type: 'spring',
          duration: 0.8,
          bounce: 0,
        },
      },
    },
  };

  return circleProps;
};
