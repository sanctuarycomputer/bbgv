export default {
  title: 'Paragraph with Call To Action Button',
  name: 'paragraphWithButton',
  type: 'object',
  fields: [
    {
      name: 'paragraph',
      title: 'Paragraph',
      type: 'portableText',
    },
    {
      name: 'button',
      title: 'Call To Action Button',
      description: 'This link will be shown to the right of the brief paragraph.',
      type: 'buttonField',
    },
  ],
};
