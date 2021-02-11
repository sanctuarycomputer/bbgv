export default {
  title: 'Featured Founders Carousel',
  name: 'featuredFoundersCarousel',
  type: 'object',
  fields: [
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Founder',
              name: 'founder',
              type: 'reference',
              to: [{ type: 'founder' }],
              validation: (Rule) => Rule.required(),
              description:
                "Connect this slide to a founder. The name of the founder, their company, and bio, will come from the founder's data.",
            },
            {
              title: 'Company',
              name: 'company',
              type: 'reference',
              to: [{ type: 'company' }],
              validation: (Rule) => Rule.required(),
              description:
                'Connect this slide to a company. The text about a founder will have a button that links to their Company Detail Page.',
            },
            {
              name: 'companyDescription',
              title: 'Company Description',
              type: 'portableText',
              description: 'Add a brief company description.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'images',
              title: 'Images',
              description: 'Add 3 images for each slide.',
              type: 'array',
              of: [
                {
                  type: 'imageField',
                },
              ],
              validation: (Rule) => Rule.required().min(3),
            },
            {
              name: 'vimeoId',
              title: 'Vimeo ID',
              type: 'string',
              description: 'Add the Vimeo ID of the video.',
            },
          ],
          preview: {
            select: {
              founderImage: 'imageOne',
            },

            prepare(selection) {
              const { founderImage } = selection;
              return {
                title: 'Slide',
                media: founderImage,
              };
            },
          },
        },
      ],
    },
  ],
};
