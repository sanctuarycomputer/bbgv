export default {
  title: 'Statistics Module',
  name: 'statisticsModule',
  type: 'object',
  fields: [
    {
      title: 'Facts',
      name: 'facts',
      type: 'array',
      of: [
        {
          type: 'object',
          fieldsets: [
            {
              title: 'Heading',
              name: 'heading',
            },
          ],
          fields: [
            {
              title: 'Left Heading',
              name: 'leftHeading',
              description:
                'This heading appears in the left column. If you do not add a right heading, then the left heading will take the entire width of the fact instead of only the left column width.',
              type: 'string',
              fieldset: 'heading',
            },
            {
              title: 'Right Heading',
              name: 'rightHeading',
              description:
                'This heading appears in the right column. If you do not add a right heading, then the left heading will take the entire width of the fact instead of only the left column width.',
              type: 'string',
              fieldset: 'heading',
            },
            {
              title: 'Paragraph With Button',
              name: 'paragraphWithButton',
              description: 'Add a brief paragraph and an optional button.',
              type: 'paragraphWithButton',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
};
