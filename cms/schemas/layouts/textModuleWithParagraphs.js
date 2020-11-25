export default {
  title: 'Text Module',
  name: 'textModuleWithParagraphs',
  type: 'object',
  fields: [
    {
      name: 'variant',
      title: 'Variant',
      description: 'Choose whether the text will be displayed in one column or two columns.',
      type: 'string',
      options: {
        list: [
          { title: 'One Column', value: 'oneColumn' },
          { title: 'Two Columns', value: 'twoColumns' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
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
      name: 'text',
      type: 'portableText',
    },
  ],
};
