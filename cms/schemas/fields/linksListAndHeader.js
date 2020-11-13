export default {
  name: 'linksListAndHeader',
  title: 'Links List and Header',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header',
      description: 'This is the header of a group of links.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'buttonField',
        },
      ],
    },
  ],
};
