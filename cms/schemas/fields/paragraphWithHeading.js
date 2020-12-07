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
    {
      name: 'button',
      title: 'Call To Action Button',
      description: 'This link will be shown at the end of the paragraph text.',
      type: 'buttonField',
    },
  ],
};
