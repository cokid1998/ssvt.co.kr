import { useEffect, useState } from 'react';
import breakpoint from '@client/src/styles/media';

const { mobile, tabletSm, tabletLg, desktop } = breakpoint;

export type MediaType = 'mobile' | 'tabletSm' | 'tabletLg' | 'desktop';

export const getCurMedia = () => {
  if (typeof window === 'undefined') return undefined;

  let curMedia: MediaType;

  if (window.matchMedia(`${mobile} and (max-width: 599px)`).matches) {
    curMedia = 'mobile';
    return curMedia;
  }
  if (window.matchMedia(`${tabletSm} and (max-width: 959px)`).matches) {
    curMedia = 'tabletSm';
    return curMedia;
  }
  if (window.matchMedia(`${tabletLg} and (max-width: 1279px)`).matches) {
    curMedia = 'tabletLg';
    return curMedia;
  }
  curMedia = 'desktop';

  return curMedia;
};

const useMedia = () => {
  const [media, setMedia] = useState(getCurMedia());

  useEffect(() => {
    window.addEventListener('resize', () => setMedia(getCurMedia()));
  }, [media]);

  return media;
};

export default useMedia;
