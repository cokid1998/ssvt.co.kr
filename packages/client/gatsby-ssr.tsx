/* eslint-disable react/jsx-key */
import * as React from 'react';
import { getCssText } from './src/styles/stitches.config';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      id="stitches"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ]);
};
