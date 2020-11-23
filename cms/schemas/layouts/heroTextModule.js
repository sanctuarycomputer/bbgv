export default {
  title: 'Hero',
  name: 'heroTextModule',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the page that appears next to the main heading.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'portableText',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'introLine',
      title: 'Intro Line',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'introByline',
      title: 'Intro ByLine',
      type: 'portableText',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'briefParagraph',
      title: 'Brief Paragraph',
      type: 'portableText',
    },
  ],
};
