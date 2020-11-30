export default {
  title: 'Investments List',
  name: 'investmentsListModule',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      description: 'This heading will appear above the list of Investments.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      description:
        'Select companies to add to the Investments List. To change the order of appearance, drag a company and place it in the correct position.',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Company Name',
              name: 'companyName',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Company',
              name: 'company',
              type: 'reference',
              description:
                'Select a Company from the dropdown menu below. Information from the Company, including their logo and founder(s), will appear in this module.',
              to: [{ type: 'company' }],
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Brief description with optional button',
              name: 'description',
              type: 'paragraphWithButton',
              description: 'Add a link to the Company Detail page if one has been created.',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      companyName: 'companyName',
    },
    prepare(selection) {
      const { companyName } = selection;
      return {
        title: companyName,
      };
    },
  },
};
