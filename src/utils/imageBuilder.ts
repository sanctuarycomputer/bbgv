import imageUrlBuilder from '@sanity/image-url';

import { Image } from 'lib/cms/types';

export type SanityDataset = 'production';
const dataset: SanityDataset = 'production';
const ProjectId = 'z4thcwkh';

export default (image: Image, width: number, quality: number, dpr: number): string => {
  if (!ProjectId) {
    console.error('Sanity project id is missing');

    return '';
  }

  const builder = imageUrlBuilder({
    projectId: ProjectId,
    dataset: dataset,
  });

  const imageAsImageObject = {
    asset: {
      _ref: image.id,
    },
  };

  return (
    builder.image(imageAsImageObject).width(width).quality(quality).dpr(dpr).auto('format').url() ||
    ''
  );
};
