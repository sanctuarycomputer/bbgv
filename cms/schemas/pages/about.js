export default {
  title: 'About Us Page',
  name: 'about',
  type: 'document',
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      options: { collapsible: true, collapsed: true },
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
  ],
  preview: {
    prepare() {
      return { title: 'About Us Page' };
    },
  },
};
