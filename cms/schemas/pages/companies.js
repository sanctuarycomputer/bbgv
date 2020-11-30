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
