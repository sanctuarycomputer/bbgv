export default {
  title: 'Hero',
  name: 'homeHeroModule',
  type: 'object',
  fieldsets: [
    {
      name: 'founders',
      title: 'Founders',
    },
  ],
  fields: [
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
