export default {
  title: 'Press List',
  name: 'pressListModule',
  type: 'object',
  fields: [
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Press Source',
              name: 'source',
              type: 'string',
              description: 'Add the name of the press outlet.',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Heading',
              name: 'heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Link',
              name: 'link',
              type: 'buttonField',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              source: 'source',
              heading: 'heading',
            },
            prepare(selection) {
              const { source, heading } = selection;

              return {
                title: `${source} - ${heading}`,
              };
            },
          },
        },
      ],
    },
  ],
};
