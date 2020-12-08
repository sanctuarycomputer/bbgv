export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
};
