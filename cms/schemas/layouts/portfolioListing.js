export default {
  title: 'Portfolio Listing',
  name: 'portfolioListingModule',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Companies',
      name: 'companies',
      description:
        'Add companies that you wish to feature in the Portfolio Listing module. To rearrange the order of the companies, drag and drop them in the menu below.',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'company' }],
        },
      ],
    },
  ],
};
