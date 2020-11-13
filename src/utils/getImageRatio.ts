import get from 'lodash/get';

import { ImageDimensions, ImageCrop } from 'lib/cms/types';

export default (imageDimenstions?: ImageDimensions, imageCrop?: ImageCrop): number => {
  return (
    ((get(imageDimenstions, 'height', 0) *
      (1 - get(imageCrop, 'bottom', 0) - get(imageCrop, 'top', 0))) /
      (get(imageDimenstions, 'width', 0) *
        (1 - get(imageCrop, 'left', 0) - get(imageCrop, 'right', 0)))) *
    100
  );
};
