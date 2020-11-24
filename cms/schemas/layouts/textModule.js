export default {
  title: 'Text Module',
  name: 'textModule',
  type: 'object',
  fields: [
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'If there is no subheading added, the heading will be preceded by a line.',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'portableText',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'briefParagraph',
      title: 'Brief Paragraph with Call To Action Button',
      type: 'paragraphWithButton',
    },
  ],
};
