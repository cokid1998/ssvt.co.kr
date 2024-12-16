import React from 'react';
import * as svg from './svgs';

export type IconType = keyof typeof svg;

interface IconProps {
  icon: IconType;
  className?: string;
  width?: string;
  height?: string;
}

const Icon = ({ icon, ...props }: IconProps) => {
  const SVGIcon = svg[icon];

  return <SVGIcon {...props} />;
};

export default Icon;
