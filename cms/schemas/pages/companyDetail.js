import CompanyDetailPageContent from '../layouts/companyDetailContent';

export default {
  title: 'Company Detail Page',
  name: 'companyDetail',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'content',
      title: 'Content',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'foundersSection',
      title: 'Founders',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'pressSection',
      title: 'Press',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: 'seoSettings',
      title: 'SEO Settings',
      type: 'seoSettings',
      fieldset: 'seo',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slugField',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Page Title',
      name: 'title',
      description: 'Add a title for the page.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'Company Detail Landing',
      name: 'companyDetailLanding',
      type: 'companyDetailLanding',
    },

    /** Content */
    CompanyDetailPageContent({ name: 'body', title: 'Body', fieldset: 'content' }),

    {
      title: 'Founders',
      name: 'founders',
      type: 'array',
      description:
        'Add Founders in the dropdown menu below. You must first create a Founder before you can add them to this module.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'founder' }],
        },
      ],
      fieldset: 'foundersSection',
    },
    {
      title: 'Press List',
      name: 'pressList',
      type: 'pressListModule',
      fieldset: 'pressSection',
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
};
