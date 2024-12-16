import useMedia, { MediaType } from './useMedia';

interface MediaSizeObjType {
  width?: string;
  hiehgt?: string;
}

interface IconSizeObjType {
  mobile?: MediaSizeObjType;
  tabletSm?: MediaSizeObjType;
  tabletLg?: MediaSizeObjType;
  desktop?: MediaSizeObjType;
}

const useMediaSvgSize = (iconSizeObj: IconSizeObjType) => {
  const curMedia = useMedia();
  let size;

  Object.keys(iconSizeObj).forEach((media) => {
    if (media === curMedia) {
      size = iconSizeObj[media];
    }
  });

  if (!size) return { width: '0px', height: '0px' };

  return size;
};

export default useMediaSvgSize;
