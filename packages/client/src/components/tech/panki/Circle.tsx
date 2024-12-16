import React from 'react';
import { motion, Variants } from 'framer-motion';

interface CircleProps {
  circleWidth: string;
  circleHeight: string;
  color: string;
  circleDrawer?: Variants;
}

const Circle = ({
  circleWidth,
  circleHeight,
  color,
  circleDrawer,
}: CircleProps) => (
  <motion.svg
    width={`${circleWidth}`}
    height={`${circleHeight}`}
    viewBox="0 0 116 117"
    fill="none"
    style={{
      transform: 'rotate(-90deg)',
    }}
  >
    <circle cx="58" cy="58" r="50" stroke="#EEEEEE" strokeWidth="15" />
    <motion.svg
      width={`${circleWidth}`}
      height={`${circleHeight}`}
      strokeWidth={15}
      strokeLinecap="round"
      variants={circleDrawer}
    >
      <motion.circle
        cx="58"
        cy="58"
        r="50"
        stroke={`${color}`}
        variants={circleDrawer}
      />
    </motion.svg>
  </motion.svg>
);

export default Circle;
