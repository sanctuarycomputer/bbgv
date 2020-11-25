export default {
  title: 'Paragraph with Heading',
  name: 'paragraphWithHeading',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'portableText',
      validation: (Rule) => Rule.required(),
    },
  ],
};
