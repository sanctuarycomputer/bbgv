import DefaultPageContent from '../layouts/defaultPageContent';

export default {
  title: 'Default Page',
  name: 'default',
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
      title: 'Intro Copy',
      name: 'intro',
      type: 'textModule',
      options: { collapsible: true, collapsed: false },
    },

    /** Content */
    DefaultPageContent({ name: 'body', title: 'Body', fieldset: 'content' }),
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
};
