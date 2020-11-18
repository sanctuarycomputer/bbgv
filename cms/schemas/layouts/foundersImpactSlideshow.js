export default {
  title: "Founder's Impact Slideshow",
  name: 'foundersImpactSlideshow',
  type: 'object',
  fields: [
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
              name: 'rightHeadline',
              title: 'Headline',
              type: 'string',
              description: "This brief text appears next to the founder(s)'s name(s).",
              fieldset: 'rightTile',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
