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
      name: 'heroSection',
      title: 'Hero',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'body',
      title: 'Body',
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
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'companyDetailLanding',
      title: 'Company Detail Landing',
      type: 'companyDetailLanding',
      fieldset: 'heroSection',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
};
