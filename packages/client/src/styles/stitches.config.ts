import { createStitches } from '@stitches/react';
import colors from './colors';
import layouts from './layouts';
import media from './media';
import radii from './radii';
import shadows from './shadows';
import typography from './typography';
import zIndices from './zIndices';
import sizes from './sizes';

export const {
  styled,
  css,
  theme,
  createTheme,
  globalCss,
  config,
  keyframes,
  getCssText,
  prefix,
  reset,
} = createStitches({
  theme: {
    colors,
    shadows,
    radii,
    zIndices,
    sizes,
    space: sizes,
    fonts: {
      Roboto: '"Roboto", -apple-system, sans-serif',
      NotoSansKR: '"Noto Sans KR", -apple-system, sans-serif',
    },
  },
  media,
  utils: {
    ...typography,
    ...layouts,
  },
});
