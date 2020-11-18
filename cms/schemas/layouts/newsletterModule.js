export default {
  title: 'Newsletter',
  name: 'newsletterModule',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'portableText',
      validation: (Rule) => Rule.required(),
    },
  ],
};
