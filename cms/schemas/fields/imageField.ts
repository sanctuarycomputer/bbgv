export default {
  title: 'Image',
  name: 'imageField',
  type: 'image',
  fields: [
    {
      title: 'Image Caption',
      name: 'caption',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      description:
        'Image description for accessibility. This will be read by screen readers to describe the contents of the image.',
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
    },
  },
};
