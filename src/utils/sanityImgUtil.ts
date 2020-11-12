import imageBuilder from 'utils/imageBuilder';

import { Image } from 'lib/cms/types';

const Defaults = {
  WIDTH: 1280,
  QUALITY: 70,
  DPR: 1,
  OPTIONS: {},
};

export default (
  image: Image,
  width: number = Defaults.WIDTH,
  options: object = Defaults.OPTIONS,
  quality: number = Defaults.QUALITY
): string => {
  if (!image.src) return '';
  const dpr: number = Defaults.DPR;

  const imageUrl: string = imageBuilder(image, width, quality, dpr);
  const optionSets: string[][] = Object.entries(options);

  if (optionSets.length) {
    const optionsString = optionSets.map(([key, value]) => `${key}=${value}`).join('&');

    return `${imageUrl}&${optionsString}`;
  } else {
    return imageUrl;
  }
};
