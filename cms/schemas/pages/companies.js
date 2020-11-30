export default {
  title: 'Companies Page',
  name: 'companies',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: { collapsible: true, collapsed: true },
    },
    {
      name: 'investmentsSection',
      title: 'Investments',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'contact',
      title: 'Contact',
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
      title: 'Hero',
      name: 'hero',
      type: 'heroTextModule',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: 'Investments List',
      name: 'investmentsList',
      fieldset: 'investmentsSection',
      type: 'investmentsListModule',
    },
    {
      title: 'Copy',
      name: 'contactSection',
      type: 'textModule',
      fieldset: 'contact',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Companies Page' };
    },
  },
};
