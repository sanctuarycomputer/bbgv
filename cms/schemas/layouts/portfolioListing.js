export default {
  title: 'Portfolio Listing',
  name: 'portfolioListingModule',
  type: 'object',
  fields: [
    {
      title: 'Sectors',
      name: 'sectors',
      description:
        'Add sectors that you wish to feature in the Portfolio Listing module. To rearrange the order of the sectors, drag and drop them in the menu below.',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'sector' }],
        },
      ],
    },
  ],
};
