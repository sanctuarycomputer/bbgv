export default {
  title: 'Newsletter',
  name: 'newsletterModule',
  type: 'object',
  fields: [
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'colorList',
      validation: (Rule) => Rule.required(),
    },
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
