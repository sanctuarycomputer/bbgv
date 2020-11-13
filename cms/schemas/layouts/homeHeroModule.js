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
      name: 'headline',
      title: 'Headline',
      type: 'string',
      fieldset: 'copy',
      validation: (Rule) => Rule.required(),
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
