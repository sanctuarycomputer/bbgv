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
    {
      name: 'teamSection',
      title: 'Team',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'valuesSection',
      title: 'Values',
      options: { collapsible: true, collapsed: false },
    },
    {
      name: 'pressSection',
      title: 'Press',
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
      title: 'Heading',
      name: 'teamHeading',
      type: 'textModule',
      fieldset: 'teamSection',
    },
    {
      title: 'Copy',
      name: 'valuesSection',
      type: 'textModuleWithParagraphs',
      fieldset: 'valuesSection',
    },
    {
      title: 'Intro Text',
      name: 'pressHeading',
      type: 'textModule',
      fieldset: 'pressSection',
    },
    {
      title: 'Press List',
      name: 'pressList',
      type: 'pressListModule',
      fieldset: 'pressSection',
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
      return { title: 'About Us Page' };
    },
  },
};
