export default {
  title: 'Hero',
  name: 'homeHeroModule',
  type: 'object',
  fieldsets: [
    {
      name: 'founders',
      title: 'Founders',
    },
    {
      name: 'copy',
      title: 'Copy',
    },
  ],
  fields: [
    {
      name: 'firstLine',
      title: 'First Line of Headline Text',
      description:
        'This text is the first line of the headline copy, that appears to the right of the logo.',
      type: 'string',
      fieldset: 'copy',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'secondLine',
      title: 'Second Line of Headline Text',
      description: 'This text is the second line of the headline copy.',
      type: 'string',
      fieldset: 'copy',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Founders',
      name: 'founders',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'founder' }],
        },
      ],
    },
  ],
};
