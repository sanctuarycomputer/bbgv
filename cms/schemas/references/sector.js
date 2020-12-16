export default {
  title: 'Sector',
  name: 'sector',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Sector Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'companies',
      title: 'Companies',
      description:
        'Connect the Sector to Companies. You must first create a Company before connecting it to a Sector. The Companies in this Sector will appear in the Portfolio Listing.',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'company' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      sectorName: 'name',
    },
    prepare(selection) {
      const { sectorName } = selection;
      return {
        title: sectorName,
      };
    },
  },
};
