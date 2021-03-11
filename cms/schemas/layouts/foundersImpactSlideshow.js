export default {
  title: "Founder's Impact Slideshow",
  name: 'foundersImpactSlideshow',
  type: 'object',
  fields: [
    {
      name: 'variant',
      title: 'Color Variant',
      description: 'Choose the background color combinations.',
      type: 'string',
      options: {
        list: [
          { title: 'Mulberry and Lilac', value: 'mulberry-lilac' },
          { title: 'Nutella and Lilac', value: 'nutella-lilac' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fieldsets: [
            {
              name: 'leftTile',
              title: 'Left Tile',
            },
            {
              name: 'rightTile',
              title: 'Right Tile',
            },
          ],
          fields: [
            {
              title: 'Company',
              name: 'company',
              type: 'reference',
              to: [{ type: 'company' }],
              validation: (Rule) => Rule.required(),
              description:
                "Connect this slide to a company. The founder(s)'s names will then appear in the right tile. The tiles will both link to the company's detail page.",
            },
            {
              name: 'leftHeadline',
              title: 'Headline',
              type: 'string',
              description: 'This is the large headline in the left tile.',
              fieldset: 'leftTile',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'leftSubheading',
              title: 'Subheading',
              type: 'string',
              description: 'This is the subheading in the left tile.',
              fieldset: 'leftTile',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'leftImage',
              title: 'Image',
              type: 'imageField',
              description: 'Add an image below the subheading in the left tile.',
              fieldset: 'leftTile',
            },
            {
              name: 'rightHeadline',
              title: 'Headline',
              type: 'string',
              description: "This brief text appears next to the founder(s)'s name(s).",
              fieldset: 'rightTile',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'rightSubheading',
              title: 'Subheading',
              type: 'string',
              description: 'This is the subheading in the right tile.',
              fieldset: 'rightTile',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
