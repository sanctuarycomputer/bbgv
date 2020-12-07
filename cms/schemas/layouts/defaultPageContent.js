export default (options) => ({
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
      },
    },
    {
      title: 'Paragraph With Inset Heading and Button',
      name: 'paragraphWithHeadingAndButton',
      type: 'paragraphWithHeading',
    },
    {
      title: 'Full Width Image and Caption',
      name: 'fullWidthImageCaption',
      type: 'imageField',
    },
    {
      title: 'Half Width Image and Caption',
      name: 'halfWidthImageCaption',
      type: 'imageField',
    },
    {
      title: 'Quote Module',
      name: 'quoteModule',
      type: 'object',
      fields: [
        {
          title: 'Quote or Highlighted Text',
          name: 'quote',
          type: 'portableText',
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Source',
          name: 'source',
          type: 'string',
        },
      ],
    },
    {
      title: 'Line Break',
      name: 'lineBreak',
      type: 'object',
      fields: [
        {
          name: 'variant',
          title: 'Color Variant',
          type: 'string',
          options: {
            list: [
              { title: 'Lilac', value: 'lilac' },
              { title: 'Mulberry', value: 'mulberry' },
            ],
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
  ...options,
});
