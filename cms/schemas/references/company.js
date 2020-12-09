import Slug from '../fields/slugField';

export default {
  title: 'Company',
  name: 'company',
  type: 'document',
  fieldsets: [
    {
      title: 'Company Links',
      name: 'links',
    },
  ],
  fields: [
    {
      title: 'Company Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    Slug,
    {
      title: 'Logo',
      name: 'logo',
      type: 'imageField',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sector',
      name: 'sector',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Fund',
      name: 'fund',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Tag',
      name: 'tag',
      type: 'string',
      description:
        "This is an optional tag that can be the status of a company. It will be displayed in the Current Portfolio listing, on the top left of a founder's portrait.",
    },
    {
      title: 'Company Website Link',
      name: 'website',
      type: 'buttonField',
      fieldset: 'links',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Company Instagram Link',
      name: 'instagram',
      fieldset: 'links',
      type: 'buttonField',
    },
    {
      title: 'Company LinkedIn Link',
      name: 'linkedIn',
      fieldset: 'links',
      type: 'buttonField',
    },
    {
      title: 'Careers Link',
      name: 'careers',
      fieldset: 'links',
      type: 'buttonField',
      description: 'This should link to the company job board.',
    },
    {
      title: 'Founders',
      name: 'founders',
      description:
        'Connect company to its founder(s). The founder(s) will appear on the Company detail page',
      type: 'array',
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: 'reference',
          to: [{ type: 'founder' }],
        },
      ],
    },
    {
      title: 'Brief Company Description',
      name: 'description',
      description:
        "This is a brief description that will show on the Companies page, when you hover over a Founder's portrait in the Current Portfolio listing.",
      type: 'portableText',
    },
  ],
  preview: {
    select: {
      companyName: 'name',
      companyLogo: 'logo',
    },
    prepare(selection) {
      const { companyName, companyLogo } = selection;
      return {
        title: companyName,
        media: companyLogo,
      };
    },
  },
};
