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
        'To change the order of appearance, drag a company and place it in the correct position.',
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
              title: 'Company Logo',
              name: 'companyLogo',
              type: 'imageField',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Founder(s)',
              name: 'founders',
              type: 'array',
              description: 'Add the Founder(s) name(s).',
              validation: (Rule) => Rule.required().min(1),
              of: [
                {
                  type: 'string',
                },
              ],
            },
            {
              title: 'Company Tag',
              name: 'companyTag',
              type: 'string',
              description:
                'This is an optional tag that can be the status of a company, such as "exited".',
            },
            {
              title: 'Brief description with optional button',
              name: 'description',
              type: 'paragraphWithButton',
              description:
                'IMPORTANT: Add an optional link to the Company Detail page if one has been created. The link must be in the format "/companies/company-name". For example, to link to Carbon 38 Company Detail page, the link would be "/companies/carbon-38". The "company-name" MUST match the "Slug" field you entered in the Company Detail page.',
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
